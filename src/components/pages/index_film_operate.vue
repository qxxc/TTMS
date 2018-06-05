<template>
    <el-tabs  class='film_cao'>
        <el-tab-pane label="查找">
            <el-form :inline="true" :model="film_select" class="demo-form-inline">
                <el-form-item label="电影名称">
                    <el-input v-model="film_select.name"></el-input>
                </el-form-item>
                <el-form-item label="电影类型">
                    <el-input v-model="film_select.categroy" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>

        </el-tab-pane>
        <el-tab-pane label="修改">

        </el-tab-pane>
        <el-tab-pane label="添加">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="电影名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="图片上传" prop="imgUrl">
                    <el-col :span="4" >
                        <div style="width:100%;overflow: hidden;margin-left:150px;">
                            <img :src="src" alt="" style="width:100%;"/>
                        </div>
                    </el-col>
                    <el-col :span="8" :offset="8">
                        <div id="upload">
                            <label class="el-form-item__label" style="width: 80px;">上传图片</label>
                            <!--elementui的上传图片的upload组件-->
                            <el-upload
                            class="upload-demo"
                            :before-upload="beforeupload"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            style="margin-left:80px;">
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                            </el-upload>
                        </div>
                    </el-col>
                </el-form-item>
                <el-form-item label="电影类型" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择电影类型">
                        <el-option label="科幻" value="1"></el-option>
                        <el-option label="动作" value="2"></el-option>
                        <el-option label="爱情" value="3"></el-option>
                        <el-option label="战争" value="4"></el-option>
                        <el-option label="喜剧" value="5"></el-option>
                        <el-option label="惊悚" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="语言类别" prop="language">
                    <el-select v-model="ruleForm.language" placeholder="请选择语言类别">
                        <el-option label="汉语" value="汉语"></el-option>
                        <el-option label="英语" value="英语"></el-option>
                        <el-option label="日语" value="日语"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否热门" prop="pishot">
                    <el-select v-model="ruleForm.pishot">
                        <el-option label="热门" value="1"></el-option>
                        <el-option label="非热门" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="时间长度" prop="time">
                    <el-input v-model.number="ruleForm.time"></el-input>
                </el-form-item>
                <el-form-item label="电影价格" prop="price">
                    <el-input v-model.number="ruleForm.price"></el-input>
                </el-form-item>
                <el-form-item label="电影描述" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                <p>{{ ruleForm.name }}-{{ ruleForm.region }}-{{ ruleForm.language }}-{{ ruleForm.pishot }}-
            {{ ruleForm.time }}-{{ ruleForm.price }}-{{ ruleForm.desc }}-{{dialogImageUrl}}</p>
            </el-form>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    data(){
        var checkTime = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
            if (!Number.isInteger(value)) {
                callback(new Error('请输入数字值'));
            } else {
                if (value < 0) {
                    callback(new Error('电影时间不能为负值'));
                } else {
                    callback();
                }
            }
            }, 1);
        };
        var checkPrice = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('价格不能为空'));
            }
            setTimeout(() => {
            if (!Number.isInteger(value)) {
                callback(new Error('请输入数字值'));
            } else {
               if (value < 0) {
                    callback(new Error('电影价格不能为负值'));
                } else {
                    callback();
                }
            }
            }, 1);
        };
        return{
            param:"",
            src:'',
            activeName: 'second',
            film_select:{},
            ruleForm: {
                name: '',
                img:'',
                region: '',
                language: '',
                pishot: '',
                time: '',
                price: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                ],
                region: [
                    { required: true, message: '请选择电影类型', trigger: 'change' }
                ],
                language: [
                    { required: true, message: '请选择语言类型', trigger: 'change' }
                ],
                pishot: [
                    { required: true, message: '请选择是否热门', trigger: 'change' }
                ],
                time: [
                    {  validator: checkTime, trigger: 'blur' }
                ],
                price: [
                    {  validator: checkPrice, trigger: 'blur' }
                ],
                desc: [
                    { required: true, message: '请填写电影描述', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
    submitForm(formName) {
    this.$refs[formName].validate((valid) => {
        if (valid) {
        alert('submit!');
        } else {
        console.log('error submit!!');
        return false;
        }
    });
    },
    resetForm(formName) {
    this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    },
    beforeupload(file) {
        console.log(file);
        //创建临时的路径来展示图片
        var windowURL = window.URL || window.webkitURL;
        
        this.src=windowURL.createObjectURL(file);
        //重新写一个表单上传的方法
        this.param = new FormData();
        this.param.append('file', file, file.name);
        console.log()
        return false;
    },
    httprequest() {},



    }
}
</script>

<style scoped>
.film_cao{
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

