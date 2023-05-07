import { defaultVersion } from '../index'
/*
 *@Description: 系统管理模块api
 *@Author: 土豆哥
 *@Date: 2022-11-28 11:54:32
 */
const parentModule = '/system'
const defaultApi = `${defaultVersion}${parentModule}`
export const user = `${defaultApi}/users`
export const role = `${defaultApi}/roles`
export const dept = `${defaultApi}/depts`
export const menu = `${defaultApi}/menus`
export const dictionary = `${defaultApi}/dictionaries`
export const dictionaryType = `${defaultApi}/dictionaryTypes`
export const log = `${defaultApi}/logs`
export const api = `${defaultApi}/apis`
