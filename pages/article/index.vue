<template>
    <div class="main">
        <div class="article-list-container">

            <div class="article-header">
                <span><i class="el-icon-document"></i>文章列表</span>
            </div>
            <el-pagination
                layout="prev, pager, next"
                :total="1000"
            >
            </el-pagination>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    layout: "article",
    data() {
        return {};
    },
    async asyncData({ app }) {
        // let retAllArticle = await app.$axios.get("/api/article/list");
        // return {
        //     articlesInfo: retAllArticle.data.data,
        // };
    }
};
</script>

<style lang='stylus' scoped>
@media screen and (min-width: 768px) {
    .main {
        margin: 0 auto;

        .article-list-container {

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
