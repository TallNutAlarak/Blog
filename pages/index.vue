<template>
    <div class="main">
        <div class="left">
            <el-carousel height="14rem">
                <el-carousel-item
                    v-for="item in 4"
                    :key="item"
                >
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <div class="article-list-container">
                <div class="article-header">
                    <span>
                        <i class="el-icon-document"></i>
                        推荐
                    </span>
                </div>
                <article-list :articlesInfo="articlesInfo"></article-list>
            </div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
import ArticleList from "~/components/ArticleList";
export default {
    components: {
        ArticleList
    },
    data() {
        return {};
    },
    computed: {},
    async asyncData({ app }) {
        let ret = await app.$axios.get("/api/article/list");

        return {
            articlesInfo: ret.data
        };
    }
};
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
<style lang="stylus"></style>
<style lang='stylus' scoped>
@media screen and (min-width: 768px) {
    .main {
        margin: 0 auto;

        .left {
            width: 69%;
            padding: 1rem;
            background: white;
            border-radius: 0.2rem;
            float: left;

            .article-list-container {
                margin-top: 2rem;

                .article-header {
                    font-size: 1.5rem;
                    font-weight: 600;
                    height: 3rem;
                    line-height: 3rem;
                    border-bottom: 1px solid rgb(221, 221, 221);

                    span {
                        padding-bottom: 0.5rem;
                        border-bottom: 2px solid #1296db;
                    }
                }
            }
        }

        .right {
            width: 29%;
            height: 1000px;
            background: #fff;
            float: right;
        }
    }

    @media screen and (min-width: 1200px) {
        .main {
            width: 74rem;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .main {
            width: 56rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        .main {
            width: 46rem;
        }
    }
}

@media screen and (max-width: 767px) {
    .main {
        width: 30rem;
        margin: 0 auto;
    }

    .left {
        width: 100%;
        padding: 1rem;
        background: white;
        border-radius: 0.2rem;
    }
}
</style>
