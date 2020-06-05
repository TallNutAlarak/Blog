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
            <div class="myInfo">
                <div class="headPortrait-container">
                    <img
                        src="~/assets/img/headPortrait.png"
                        alt=""
                    >
                </div>
                <div class="myInfo-detail">
                    <div>网名：Tall-NutAlarak</div>
                    <div>现居：江苏-常州</div>
                    <div>职业：学生</div>
                    <div>邮箱：1194291667@qq.com</div>
                </div>
                <div class="myInfo-status">
                    <div>{{articlesInfo.length}}文章</div>
                    <div>0动态</div>
                </div>
            </div>
            <div class="dynamics-container">
                <div class="dynamics-header"><svg
                        t="1591345774364"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2603"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="24"
                        height="24"
                    >
                        <defs>
                            <style type="text/css"></style>
                        </defs>
                        <path
                            d="M450.815 654.258c27.524-74.744-26.714-164.06-120.347-198.464L112.44 375.517c-21.451-7.824-40.206-11.603-55.586-11.603-52.214 0-68.269 42.499-34.134 111.442l25.905 52.078c44.523 89.45 141.934 185.107 216.544 212.631a142.468 142.468 0 0 0 49.65 8.905c58.822 0 114.543-36.293 135.996-94.712zM371.078 452.69c13.223 4.858 26.714 7.15 40.475 7.15 63.952 0 129.657-50.459 157.99-127.633l80.41-218.297c25.095-67.728 8.365-107.664-36.562-107.664-17.134 0-38.587 5.801-63.276 18.08L498.036 50.23c-89.45 44.523-185.107 141.934-212.63 216.544-27.524 74.878 11.062 158.393 85.672 185.916z m630.202 99.3l-25.905-52.078c-44.523-89.586-141.934-185.108-216.544-212.766-16.46-6.206-33.19-8.905-49.784-8.905-58.96 0-114.68 36.293-136.132 94.713-27.524 74.744 26.714 164.06 120.347 198.464l218.298 80.41c21.451 7.825 40.07 11.604 55.586 11.604 52.078 0.001 68.269-42.499 34.134-111.442z m-348.628 22.802c-13.223-4.992-26.714-7.286-40.475-7.286-63.952 0-129.657 50.459-157.99 127.633l-80.41 218.027c-24.96 67.729-8.365 107.665 36.697 107.665 17.134 0 38.587-5.801 63.277-18.079l52.078-25.905c89.45-44.523 185.107-141.934 212.631-216.544 27.523-74.474-11.063-157.989-85.808-185.511z"
                            fill=""
                            p-id="2604"
                        ></path>
                    </svg>最新动态
                </div>

                <div class="dynamics-body">
                    <svg
                    t="1591346252820"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5651"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="32"
                    height="32"
                >
                    <defs>
                        <style type="text/css"></style>
                    </defs>
                    <path
                        d="M72.2 799.5l136.5-340.8c8.4-21 27-36.2 49.1-40.3s44.9 3.4 60.3 20l216.2 233.8c15.5 16.7 21.3 40.3 15.3 62.3-5.9 22-22.8 39.5-44.5 46.1l-352.7 107c-24.3 7.3-50.5 0-67.6-18.7-17.1-18.8-22-45.7-12.6-69.3v-0.1zM345.9 283c-19.9 0-38.3-10.7-48.2-28-9.9-17.3-9.9-38.6 0-55.9 9.9-17.3 28.3-28 48.2-28 30.8 0 55.7 25 55.7 55.9s-24.9 56-55.7 56z m556.9 111.8c-19.9 0-38.3-10.7-48.2-27.9-9.9-17.3-9.9-38.6 0-55.9 9.9-17.3 28.3-28 48.2-27.9 30.8 0 55.7 25 55.7 55.9s-25 55.8-55.7 55.8z"
                        fill="#F4A625"
                        p-id="5652"
                    ></path>
                    <path
                        d="M346.6 851.8l92.6-27.5c-0.1-4.7 0.8-9.4 2.8-13.7 17.3-38.1-19.9-135.6-115.5-283.3l-48.7 103.1c2.9 2.2 5.3 5 7.3 8.3 49.3 82.9 70.5 154 61.5 213.1z m-69.3 20.6c0.4-1.5 1-2.9 1.6-4.3 18.1-39.7 8.5-97.2-31.8-172.6l-72.8 154.3c-5.2 10.9-3.4 23.9 4.4 33 7.8 9.2 20.3 12.9 31.8 9.4l66.8-19.8z m228.5-67.9l129.6-38.6c9.9-3 17.7-10.8 20.6-20.8s0.5-20.8-6.2-28.6L413.3 443.3c-6.7-7.8-16.9-11.6-27.1-10.2-10.2 1.4-18.9 7.8-23.4 17.1l-5.9 12.5c106.2 158.4 156.9 270 148.9 341.8zM307.8 424c13.2-28 39.6-47.4 70.1-51.7s61.2 7.3 81.4 30.7l236.4 273.3c20.4 23.6 27.5 56 18.8 86s-32 53.5-61.8 62.3L227.9 950.9c-34.6 10.3-71.9-0.8-95.3-28.3s-28.6-66.3-13.2-99L307.8 424z m177.1-304.5c-9.9 0-19-5.3-24-13.9s-4.9-19.2 0-27.8 14.1-13.9 24-13.9c15.3 0 27.7 12.5 27.7 27.8s-12.4 27.8-27.7 27.8zM817.2 676c-15.3 0-27.7-12.5-27.7-27.8s12.4-27.8 27.7-27.8c15.3 0 27.7 12.5 27.7 27.8S832.5 676 817.2 676z m0-497.1c-15.3 0-27.7-12.5-27.7-27.8s12.4-27.8 27.7-27.8c15.3 0 27.7 12.5 27.7 27.8s-12.4 27.8-27.7 27.8zM651.1 453.4c-15.3 0-27.7-12.5-27.7-27.8 0-15.4 12.4-27.8 27.7-27.8s27.7 12.5 27.7 27.8c-0.1 15.3-12.5 27.8-27.7 27.8zM850.2 463.4c8.1 5.8 12.5 15.5 11.5 25.4-1 9.9-7.2 18.6-16.3 22.7-9.1 4.1-19.6 2.9-27.6-3-16.4-11.9-23-10.9-33.5 4.6-24.4 35.6-59.7 55.3-103.7 58.2-10.1 1.1-20-3.5-25.7-11.9-5.8-8.4-6.5-19.3-1.9-28.4 4.6-9.1 13.8-14.9 24-15.2 27.3-1.8 47.1-12.9 61.7-34.2 28.4-41.6 70.2-48.1 111.5-18.2z m-319.5-225c19.3 27.7 17.1 73.1-1.7 140.1-4.1 14.8-19.4 23.4-34.1 19.3-14.7-4.1-23.3-19.5-19.2-34.3 14.5-51.6 16.1-84 9.6-93.2-0.3-0.4-0.5-0.7-0.8-1.1-8.7 2.8-18.3 1-25.5-4.7-12-9.5-14.1-27-4.6-39.1 23.5-29.9 54.4-18.4 76.3 13z m181.2-91.1c15-0.1 27.3 11.8 27.9 26.8 0.5 15.1-11 27.8-25.9 28.7-17.3 0.6-23.1 8.5-22.2 36.7 1.9 53.2-14.5 90.3-52.1 104-9.3 3.5-19.8 1.7-27.5-4.7s-11.3-16.5-9.5-26.3c1.6-8.6 7-15.9 14.7-19.8l3.4-1.5c10.5-3.8 16.7-18 15.6-49.7-2-56.5 24.8-92.4 75.6-94.2z"
                        fill="#333333"
                        p-id="5653"
                    ></path>
                </svg>
                    最近新增一篇《{{newArticle[0].title}}》文章！
                </div>

            </div>
            <div class="tags-container">
                <div class="tags-header">
                    <svg
                        t="1591258000264"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="6440"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="24"
                        height="24"
                    >
                        <defs>
                            <style type="text/css"></style>
                        </defs>
                        <path
                            d="M753.755 571.711c0-14.928-5.098-27.792-15.534-39.079l-305.593-304.985c-10.801-10.801-25.607-20.025-43.569-27.792-18.447-7.767-34.953-11.286-49.881-11.286h-177.797c-14.928 0-27.792 5.703-38.471 16.384s-16.384 23.545-16.384 38.471v177.189c0 14.928 3.641 31.918 11.286 49.881 7.767 18.447 16.384 32.768 27.792 43.569l305.593 305.593c10.801 10.801 23.545 15.534 38.471 15.534s27.792-5.098 39.079-15.534l209.473-209.473c9.83-10.801 15.534-23.545 15.534-38.471zM281.653 364.302c-10.801 10.801-23.545 15.777-38.471 15.777s-27.792-5.098-38.471-15.777c-10.801-10.801-15.777-23.545-15.777-38.471s5.098-27.792 15.777-38.471c10.801-10.801 23.545-15.777 38.471-15.777s27.792 5.098 38.471 15.777 15.534 23.545 15.534 38.471c0.85 15.17-4.854 27.67-15.534 38.471zM902.061 532.268l-305.593-304.621c-10.801-10.801-25.607-20.025-43.569-27.792-18.447-7.767-34.953-11.286-49.881-11.286h-96.119c14.928 0 31.918 3.641 49.881 11.286 18.447 7.767 32.768 16.384 43.569 27.792l305.593 304.621c10.801 11.286 15.777 24.151 15.777 39.079s-5.098 27.792-15.777 38.471l-200.249 200.855c8.617 8.617 16.384 14.928 22.695 19.054s14.928 5.703 25.122 5.703c14.928 0 27.792-5.098 39.079-15.777l209.473-210.079c10.801-10.801 15.534-23.545 15.534-38.471-0.122-14.928-5.098-27.185-15.534-38.836z"
                            p-id="6441"
                        ></path>
                    </svg>
                    热门标签
                </div>
                <div class="tag-container">
                    <nuxt-link
                        :to="'/tags/' + tag._id"
                        class="tag"
                        v-for="(tag,index) in tagsInfo"
                        :key="index"
                        :style="`border:1px solid rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`"
                    >
                        {{tag._id}}({{tag.num_tutorial}})
                    </nuxt-link>
                </div>

            </div>
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
        let retArticle = await app.$axios.get("/api/article/hot");
        let retTags = await app.$axios.get("/api/tags/list");
        let retDynamics = await app.$axios.get("/api/article/dynamics");

        return {
            articlesInfo: retArticle.data.data,
            tagsInfo: retTags.data.data,
            newArticle: retDynamics.data.data
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
            float: right;

            .myInfo {
                padding-top: 2rem;
                background: #fff;

                .headPortrait-container {
                    width: 6rem;
                    height: 6rem;
                    margin: 0 auto;
                    border-radius: 50%;
                    overflow: hidden;

                    img {
                        width: 6rem;
                        height: 6rem;
                        transition: all 1s;

                        &:hover {
                            transform: rotate(360deg);
                        }
                    }
                }

                .myInfo-detail {
                    margin-top: 2rem;
                    padding-left: 2rem;

                    div {
                        height: 2rem;
                        line-height: 2rem;
                    }
                }

                .myInfo-status {
                    display: flex;
                    justify-content: space-around;
                    height: 3rem;
                    line-height: 3rem;
                    margin-top: 2rem;
                    border-top: 1px solid rgb(229, 229, 229);
                }
            }

            .dynamics-container {
                margin-top: 1rem;
                background: #fff;

                .dynamics-header {
                    font-size: 1.5rem;
                    font-weight: 500;
                    height: 4rem;
                    line-height: 4rem;
                    padding-left: 1rem;
                    border-bottom: 1px solid rgb(229, 229, 229);

                    svg {
                        position: relative;
                        right: 0.3rem;
                        top: 0.2rem;
                    }
                }


                .dynamics-body {
                    padding: 2rem 1rem;
                }
            }

            .tags-container {
                margin-top: 1rem;
                background-color: #fff;

                .tags-header {
                    font-size: 1.5rem;
                    font-weight: 500;
                    height: 4rem;
                    line-height: 4rem;
                    padding-left: 1rem;
                    border-bottom: 1px solid rgb(229, 229, 229);

                    svg {
                        position: relative;
                        top: 0.3rem;
                        left: 0.3rem;
                    }
                }

                .tag-container {
                    padding: 1rem;
                    display: flex;
                    flex-wrap: wrap;

                    .tag {
                        padding: 0.8rem;
                        border-radius: 10px;
                        border: 1px solid #000;
                        margin-right: 1rem;
                        margin-bottom: 1rem;
                    }
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
