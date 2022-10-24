/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {
  "/": "/", "deepl": "https://deepl.com/", "reddit": "https://reddit.com/", "maps": "https://maps.google.com/", "jarvis": "https://purmerend.jarvis.bit-academy.nl", "noordhoff": "https://apps.noordhoff.nl/se/home/overview", "socrative": "https://b.socrative.com/login/student/", "math": "https://mathsolver.microsoft.com/en", "reddit": "https://www.reddit.com", "linkedin": "https://www.linkedin.com/in/lemuel-bakker", "youtube": "https://www.youtube.com", "twitter": "https://twitter.com/home", "fiddles": "https://fiddles.io", "github": "https://github.com/I-am-Lemuel", "regex101": "https://regex101.com", "readme": "https://readme.so/editor", "chess": "https://www.chess.com/home", "tetr": "https://tetr.io/", "monkeytype": "https://monkeytype.com", "fnf": "https://www.fnfgo.com/"
}
const engine = "startpage"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{ "id": "WnTcPKz2z4i7ommd", "label": "School", "bookmarks": [{ "id": "bDi3qSOL1I26tQZM", "label": "jarvis", "url": "https://purmerend.jarvis.bit-academy.nl" }, { "id": "Yr05o1mrzKUNT3zM", "label": "noordhoff", "url": "https://apps.noordhoff.nl/se/home/overview" }, { "id": "6U6QpjsjgqyGEWrb", "label": "socrative", "url": "https://b.socrative.com/login/student/" }, { "id": "cqpUFqVlNm5zrHv2", "label": "math", "url": "https://mathsolver.microsoft.com/en" }] }, { "id": "OsjrsKnDsi2oOdAy", "label": "Social", "bookmarks": [{ "id": "JN1MWt1pYHXvIhAZ", "label": "reddit", "url": "https://www.reddit.com" }, { "id": "pyr38iWSfJzfaaLA", "label": "linkedin", "url": "https://www.linkedin.com/in/lemuel-bakker" }, { "id": "Ks6jjyT5AQdTKWxS", "label": "youtube", "url": "https://www.youtube.com" }, { "id": "J9SwcRQ54haFRjOy", "label": "twitter", "url": "https://twitter.com/home" }] }, { "id": "y3Lnp3kEZ6f0aPwR", "label": "Programming", "bookmarks": [{ "id": "fUTASXa4BelbLMyb", "label": "fiddles", "url": "https://fiddles.io" }, { "id": "fhxmD9WPd2tCG9rG", "label": "github", "url": "https://github.com/I-am-Lemuel" }, { "id": "8ktIUc2c9eLHTluM", "label": "regex101", "url": "https://regex101.com" }, { "id": "JHCocyxreQJdDHKY", "label": "readme", "url": "https://readme.so/editor" }] }, { "id": "u4n5KlAT2rnAygio", "label": "Fun", "bookmarks": [{ "id": "WabLXJWcvXrNodpQ", "label": "chess", "url": "https://www.chess.com/home" }, { "id": "ofHZ5VVdhbWCgql2", "label": "tetr", "url": "https://tetr.io/" }, { "id": "KmGsHHu7gS1nVjNV", "label": "monkeytype", "url": "https://monkeytype.com" }, { "id": "KUoZ4jMsADhwluOp", "label": "fnf", "url": "https://www.fnfgo.com/" }] }]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
