<template>
    <div class="container">
        <div class="search">
            <el-input v-model="input" placeholder="姓名/手机/邮箱" class="search-input"></el-input>
            <el-button class="search-btn">查询</el-button>
        </div>
        <div class="participants-table">
              <el-table :data="tableData" stripe="true"  style="width: 100%">
                <el-table-column highlight-current-row = true
                prop="date"
                label="日期"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
       
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        methods: {
          
        },
    }
</script>

<style lang="less" scoped>
    .container{
        width: 90%;
        margin: 0 auto;
        padding-top: 20px;
        .search{
            width: 100%;
            padding: 12px;
            background: #FFFFFF;
            border-radius: 3px;
            border: 1px solid #E2E4EA;
            .search-input{
                width: 252px;
                /deep/ .el-input__inner{
                    height: 30px;
                    line-height: 30px;
                }
                
            }
            .search-btn{
                border-radius: 3px;
                border: 1px solid #597EF7;
                padding: 0 20px;
                line-height: 28px;
                margin-left: 10px;
                color: #597EF7;
            }
        }
    }
</style>