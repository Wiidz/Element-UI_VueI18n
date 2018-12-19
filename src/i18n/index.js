/**
 * Function :
 * 1. 将当前语种存入localStorage中
 * 2. 给body添加了语种样式，方便针对不同语言进行排版
 * 3. 将当前语种保存到Vue的全局配置中
 * 4. 词典中也同步引入了各个语言的element包，并切换
 *
 * Usage :
 * 1. 在main.js中引入此文件
 * 2. 挂载到Vue实例上
 * 3. 脚本内使用 this.$i18n
 * 4. 脚本外使用 $e('message.hello')
 * 5. 修改语言调用this.$i18n.setup('zh')
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'

//在这里引入各个语言包
import de from './directory/de.js'
import en from './directory/en.js'
import es from './directory/es.js'
import fr from './directory/fr.js'
import zh from './directory/zh.js'

Vue.use(VueI18n)

const DEFAULT_LANG = 'zh' //默认场景
const LOCALE_KEY = 'localeLanguage' //当前场景的localStorage键值
const locales = {
    de: de,
    en: en,
    es: es,
    fr: fr,
    zh: zh
} // 定义各种场景

//构建i18n对象
const i18n = new VueI18n({
    locale: DEFAULT_LANG,
    messages: locales
})

//挂载一个setup方法
i18n.setup = lang => {

    //不传值时获取缓存中，如果为空，使用默认语言
    if (lang === undefined) {
        lang = window.localStorage.getItem(LOCALE_KEY)
        if (locales[lang] === undefined) {
            lang = DEFAULT_LANG
        }
    }

    //写入缓存
    window.localStorage.setItem(LOCALE_KEY, lang)

    //将body体中lang属性移除
    Object.keys(locales).forEach(lang => {
        document.body.classList.remove(`lang-${lang}`)
    })

    //给body体加上class='lang-zh' 和 lang属性
    document.body.classList.add(`lang-${lang}`)
    document.body.setAttribute('lang', lang)

    //设置语言
    Vue.config.lang = lang
    i18n.locale = lang

    console.log('now language :', Vue.config.lang);
}

locale.i18n((key, value) => i18n.t(key, value)) //适配element
export default i18n

i18n.setup() //初始化


