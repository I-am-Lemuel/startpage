/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "duckduckgo"
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

const bookmarks = [{"id":"dtN92AxxQC4nkKau","label":"school","bookmarks":[{"id":"OJN1G8TzN52gU0nW","label":"Jarvis","url":"https://purmerend.jarvis.bit-academy.nl/"}]},{"id":"sIZHwqAi47Hcbu1N","label":"personal","bookmarks":[{"id":"6B4rUX9hpYDQiRcl","label":"Github","url":"https://github.com/SudoLemuel"}]},{"id":"k4q025qJaMo3uHPk","label":"media","bookmarks":[{"id":"oFsgKjr2eB5CAz6a","label":"Youtube","url":"https://www.youtube.com/"}]},{"id":"ZfTlNIpudv9kZVH0","label":"reddit","bookmarks":[{"id":"ZNuoOzQhG6wWHEfc","label":"r/home","url":"https://www.reddit.com/"},{"id":"AgmKkfk3emHOvhyB","label":"r/unixporn","url":"https://www.reddit.com/r/unixporn/"},{"id":"Nt3xMvjt9h4cDTu5","label":"r/ProgrammerHumor","url":"https://www.reddit.com/r/ProgrammerHumor/"}]}]

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
