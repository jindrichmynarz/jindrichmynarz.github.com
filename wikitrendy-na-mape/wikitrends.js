const app = function () {

  const get_top_pages = async (wiki_lang, year_month, number) => {
    const endpoint = "https://wikimedia.org/api/rest_v1/metrics/pageviews/top",
          date = year_month.replace("-", "/"),
          url = `${endpoint}/${wiki_lang}.wikipedia/all-access/${date}/all-days`;

    return fetch(url)
      .then(response => response.json())
      .then(data => data
        .items[0]
        .articles
        .slice(0, number))
      .catch(error => alert(`Pro jazyk ${wiki_lang} ještě Wikipedii nezaložili!`));
  };

  const query_map = (wiki_lang, pages) => {
    const wikipedia = `https://${wiki_lang}.wikipedia.org/wiki/`,
          values = pages
            .map(({article}) => `<${wikipedia}${encodeURIComponent(article)}>`)
            .join("\n"),
          query = `PREFIX :         <http://schema.org/>
                   PREFIX bd:       <http://www.bigdata.com/rdf#>
                   PREFIX wdt:      <http://www.wikidata.org/prop/direct/>
                   PREFIX wikibase: <http://wikiba.se/ontology#>

                   #defaultView:Map
                   SELECT ?wikidata ?wikidataLabel ?coords
                   WHERE {
                       VALUES ?page {
                           ${values}
                       }
                       ?page :about ?wikidata .
                       ?wikidata wdt:P625 ?coords .
                       SERVICE wikibase:label {
                         bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" .
                       }
                   }`.replace(/ +/g, " ");
    return "https://query.wikidata.org/embed.html#" + encodeURIComponent(query);
  };

  const take_me_there = async ({wiki_lang, year_month, number}) => {
    const pages = await get_top_pages(wiki_lang, year_month, number);
    window.location.replace(query_map(wiki_lang, pages));
  };

  const month_ago = (function () {
    let date = new Date(),
        month = date.getMonth();
    date.setMonth(month - 1);
    if (date.getMonth() == month) date.setDate(0);
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}`;
  }());

  var year_month = document.getElementById("year_month");
  year_month.value = month_ago;
  year_month.max = month_ago;

  const form = document.getElementById("wikitrends");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    take_me_there(Object.fromEntries((new FormData(form)).entries()));
  });
};

window.addEventListener("DOMContentLoaded", app);
