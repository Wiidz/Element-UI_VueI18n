<template>
    <div class="hello">
        <h1>i18n DEMO</h1>
        <h2>{{ $t('message.hello' )}}</h2>
        <el-form label-position="top">
            <el-form-item :label="$t('message.language')">
                <el-radio-group v-model="langNow" @change="changeLang" size="medium">
                    <el-radio-button v-for="(item,index) in lang" :key="index" :label="item.label"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item :label="$t('message.name')">
                <el-input v-model="input" :placeholder="$t('message.hello')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('message.date')">
                <el-date-picker></el-date-picker>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                input: '',
                placeholder: '你好',
                lang: [
                    {'label': '中文', 'value': 'zh'},
                    {'label': '英语', 'value': 'en'},
                    {'label': '德语', 'value': 'de'},
                    {'label': '西班牙语', 'value': 'es'},
                    {'label': '法语', 'value': 'fr'},
                ],
                langNow: '中文'
            }
        },
        methods: {
            changeLang(e) {
                for (var i in this.lang) {
                    if (e != this.lang[i]['label']) continue
                    this.$i18n.setup(this.lang[i]['value'])
                    break
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    .hello {
        margin: 0 auto;
        max-width: 374px;
    }

    .el-form {
        width:100%;
        margin:0 auto;
    }

    .el-input {
        width: 100%;

    }

    .el-form-item {
        text-align: left;
    }
</style>
