'use strict'
import { listWrapper } from './ListWrapper.js'
import { fetchComments } from './fetch.js'
import { showAuthorizationNotice } from './notion/notion.js'

async function initApp() {
  try {
    const comments = await fetchComments()
    const user = {}
    listWrapper({ user, comments })
    if (Object.keys(user).length !== 0) {
      addFormElement({ user })
    } else {
      showAuthorizationNotice()
    }
  } catch (error) {
    console.error('Ошибка приложения:', error)
  } 
}

initApp()
