<template>
    <div>
        <div
            v-for="item in articlesInfo"
            :key="item._id"
            class="article-container"
        >
            <nuxt-link
                :to="'/article/detial/'+item._id"
                class="article-img"
            >
                <img
                    :src="require(`~/assets/img${item.cover}`)"
                    alt=""
                >
            </nuxt-link>
            <div class="article-detail">
                <div class="article-category">{{item.category}}</div>
                <nuxt-link
                    :to="'/article/detial/'+item._id"
                    class="article-title"
                >
                    <span>{{item.title}}</span>
                </nuxt-link>
                <div class="article-abstract">
                    {{item.abstract}}
                </div>
                <div class="article-sate">
                    <div class="article-createTime">
                        <svg
                            t="1591257728427"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2618"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                        >
                            <defs>
                                <style type="text/css"></style>
                            </defs>
                            <path
                                d="M831.970107 64.089678h-127.940214V32.044839a32.044839 32.044839 0 0 0-64.089678 0v32.044839h-255.88043V32.044839a32.044839 32.044839 0 0 0-64.089678 0v32.044839H191.312471a191.312471 191.312471 0 0 0-191.312471 186.051378V836.99206a191.312471 191.312471 0 0 0 191.312471 186.051378h640.657636a191.312471 191.312471 0 0 0 191.312471-191.312471V255.88043a191.312471 191.312471 0 0 0-191.312471-191.790752z m127.940215 767.880429a128.179355 128.179355 0 0 1-127.940215 127.940215H191.312471a127.940215 127.940215 0 0 1-127.940215-127.940215v-416.104624h896.538066z m0-479.955161H64.089678v-95.656235A127.940215 127.940215 0 0 1 191.312471 127.940215h127.940215V191.312471a32.044839 32.044839 0 0 0 64.089677 0V127.940215h255.88043V191.312471a32.044839 32.044839 0 0 0 64.089678 0V127.940215h127.940215a128.179355 128.179355 0 0 1 127.940215 127.940215z"
                                p-id="2619"
                            ></path>
                            <path
                                d="M296.295189 621.76553H186.529659a36.58851 36.58851 0 0 1 0-73.17702h109.76553a36.58851 36.58851 0 1 1 0 73.17702zM588.764129 621.76553H442.410089a36.58851 36.58851 0 0 1 0-73.17702h146.35404a36.58851 36.58851 0 0 1 0 73.17702zM844.644559 621.76553h-109.52639a36.58851 36.58851 0 1 1 0-73.17702h109.52639a36.58851 36.58851 0 1 1 0 73.17702zM296.295189 841.05745H186.529659a36.58851 36.58851 0 1 1 0-73.17702h109.76553a36.58851 36.58851 0 0 1 0 73.17702zM588.764129 841.05745H442.410089a36.58851 36.58851 0 0 1 0-73.17702h146.35404a36.58851 36.58851 0 0 1 0 73.17702zM844.644559 841.05745h-109.52639a36.58851 36.58851 0 1 1 0-73.17702h109.52639a36.58851 36.58851 0 1 1 0 73.17702z"
                                p-id="2620"
                            ></path>
                        </svg>
                        {{item.createdAt.slice(0,10)}}
                    </div>
                    <div><svg
                            t="1591257864873"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4904"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                        >
                            <defs>
                                <style type="text/css"></style>
                            </defs>
                            <path
                                d="M512 844.8c-209.067 0-379.733-198.4-443.733-281.6-23.467-29.867-23.467-72.533 0-102.4 64-85.333 234.666-281.6 443.733-281.6s379.733 198.4 443.733 281.6c23.467 29.867 23.467 72.533 0 102.4-64 85.333-234.666 281.6-443.733 281.6z m0-580.267C337.067 264.533 181.333 454.4 138.667 512c42.666 57.6 198.4 247.467 373.333 247.467S842.667 569.6 885.333 512C842.667 454.4 686.933 264.533 512 264.533z"
                                p-id="4905"
                            ></path>
                            <path
                                d="M384 512a128 128 0 1 0 256 0 128 128 0 1 0-256 0z"
                                p-id="4906"
                            ></path>
                        </svg>{{item.views}}</div>
                    <div><svg
                            t="1591257959790"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="5690"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                        >
                            <defs>
                                <style type="text/css"></style>
                            </defs>
                            <path
                                d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253"
                                p-id="5691"
                            ></path>
                            <path
                                d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819"
                                p-id="5692"
                            ></path>
                        </svg>{{item.like}}</div>
                    <div><svg
                            t="1591258000264"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="6440"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                        >
                            <defs>
                                <style type="text/css"></style>
                            </defs>
                            <path
                                d="M753.755 571.711c0-14.928-5.098-27.792-15.534-39.079l-305.593-304.985c-10.801-10.801-25.607-20.025-43.569-27.792-18.447-7.767-34.953-11.286-49.881-11.286h-177.797c-14.928 0-27.792 5.703-38.471 16.384s-16.384 23.545-16.384 38.471v177.189c0 14.928 3.641 31.918 11.286 49.881 7.767 18.447 16.384 32.768 27.792 43.569l305.593 305.593c10.801 10.801 23.545 15.534 38.471 15.534s27.792-5.098 39.079-15.534l209.473-209.473c9.83-10.801 15.534-23.545 15.534-38.471zM281.653 364.302c-10.801 10.801-23.545 15.777-38.471 15.777s-27.792-5.098-38.471-15.777c-10.801-10.801-15.777-23.545-15.777-38.471s5.098-27.792 15.777-38.471c10.801-10.801 23.545-15.777 38.471-15.777s27.792 5.098 38.471 15.777 15.534 23.545 15.534 38.471c0.85 15.17-4.854 27.67-15.534 38.471zM902.061 532.268l-305.593-304.621c-10.801-10.801-25.607-20.025-43.569-27.792-18.447-7.767-34.953-11.286-49.881-11.286h-96.119c14.928 0 31.918 3.641 49.881 11.286 18.447 7.767 32.768 16.384 43.569 27.792l305.593 304.621c10.801 11.286 15.777 24.151 15.777 39.079s-5.098 27.792-15.777 38.471l-200.249 200.855c8.617 8.617 16.384 14.928 22.695 19.054s14.928 5.703 25.122 5.703c14.928 0 27.792-5.098 39.079-15.777l209.473-210.079c10.801-10.801 15.534-23.545 15.534-38.471-0.122-14.928-5.098-27.185-15.534-38.836z"
                                p-id="6441"
                            ></path>
                        </svg>{{item.tags}}</div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        articlesInfo: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang='stylus' scoped>
$color-main = #1296db;
$color-font = rgb(86, 108, 128);

.article-container {
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.6rem;
    box-shadow: 0px 3px 4px #888;
    overflow: hidden;
    position: relative;
    color: $color-font;

    &:hover {
        box-shadow: 6px 6px 17px #888;
    }

    .article-img {
        display: block;
        height: 10rem;
        width: 36%;
        overflow: hidden;
        float: left;

        img {
            width: 100%;
            transition: all 0.5s;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    .article-detail {
        float: right;
        width: 60%;

        .article-category {
            float: left;
            width: 16%;
            padding: 0.3rem 0.6rem;
            background: $color-main;
            color: white;
            font-size: 0.6rem;
        }

        .article-title {
            float: right;
            width: 80%;
            font-size: 1.5rem;
        }

        .article-abstract {
            clear: both;
            margin-top: 3rem;
            height: 5.5rem;
            // 实现省略号
            position: relative;
            line-height: 1.5rem;
            max-height: 5.5rem;
            overflow: hidden;
            text-indent: 2em;
        }

        .article-abstract::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            padding-left: 40px;
            background: -webkit-linear-gradient(left, transparent, #fff 55%);
            background: -o-linear-gradient(right, transparent, #fff 55%);
            background: -moz-linear-gradient(right, transparent, #fff 55%);
            background: linear-gradient(to right, transparent, #fff 55%);
        }

        .article-sate {
            display: flex;
            position: absolute;
            bottom: 1rem;

            div {
                margin-right: 2rem;
            }
        }
    }
}
</style>
