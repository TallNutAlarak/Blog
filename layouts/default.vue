<template>
    <div>
        <div class="header-container">
            <div class="header">
                <div class="logo">
                    <img
                        src="~assets/img/logo.png"
                        alt=""
                    >
                    <span>老王的小窝</span>
                </div>
                <i
                    class="el-icon-menu menu"
                    v-show="windowWidth<=767"
                    @click="isNavShow=!isNavShow"
                >
                </i>
                <div
                    class="nav"
                    v-show="windowWidth<=767 ? isNavShow : true"
                >
                    <div class="search">
                        <i
                            v-show="windowWidth<992 && windowWidth>767"
                            class="el-icon-search"
                            @click="toggleSearchShow"
                        ></i>
                        <el-input
                            placeholder="请输入内容"
                            v-model="searchCondition"
                            v-show="windowWidth>=992 || windowWidth<=767"
                        >
                            <i
                                slot="prefix"
                                class="el-input__icon el-icon-search"
                            ></i>
                        </el-input>

                    </div>

                    <nuxt-link
                        to="/"
                        class="nav-item"
                    >
                        <i class="el-icon-s-home"></i>
                        首页
                    </nuxt-link>
                    <nuxt-link
                        to="/"
                        class="nav-item"
                    >
                        <i class="el-icon-tickets"></i>
                        博文
                    </nuxt-link>
                    <nuxt-link
                        to="/"
                        class="nav-item"
                    >
                        <i class="el-icon-user-solid"></i>
                        关于
                    </nuxt-link>

                </div>
            </div>
        </div>
        <div
            class="backToTop"
            @click="backToTop"
            v-show="isBackIconShow"
        >
            <svg
                t="1591252226122"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2918"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="48"
                height="96"
            >
                <defs>
                    <style type="text/css"></style>
                </defs>
                <path
                    d="M760.789 439.887C764.394 155.042 530.029 25.24 512 14.423c-14.423 7.21-252.394 137.014-248.789 425.464-46.873 32.451-97.352 86.536-90.14 180.282 7.21 93.746 100.957 158.648 137.014 155.042 36.056-3.605 25.239-28.845 25.239-28.845l10.817-50.479s54.084 79.324 68.507 79.324h194.704c18.028 0 68.507-79.324 68.507-79.324l10.817 50.48s-10.817 25.239 25.24 28.844c36.056 3.606 129.802-61.296 137.014-155.042 7.21-93.746-43.268-147.831-90.141-180.282zM512 436.282c-7.211 0-93.746-3.606-104.563-104.564C411.042 234.366 504.789 227.155 512 223.55c7.211 0 100.958 10.817 104.563 108.17C605.746 432.675 519.211 436.281 512 436.281z m0 0M457.915 930.254c0 10.816-10.816 21.633-21.633 21.633-10.817 0-21.634-10.817-21.634-21.633V825.69c0-10.817 10.817-21.634 21.634-21.634s21.633 10.817 21.633 21.634v104.564z m0 0M537.24 984.338c0 10.817-10.817 21.634-21.634 21.634s-21.634-10.817-21.634-21.634V829.296c0-10.817 10.817-21.634 21.634-21.634s21.633 10.817 21.633 21.634v155.042z m0 0M609.352 905.014c0 10.817-10.817 21.634-21.634 21.634s-21.633-10.817-21.633-21.634v-75.718c0-10.817 10.816-21.634 21.633-21.634 10.817 0 21.634 10.817 21.634 21.634v75.718z m0 0"
                    p-id="2919"
                ></path>
            </svg>
        </div>
        <nuxt class="main" />
    </div>
</template>
<script>
import { log } from "util";
export default {
    mounted() {
        this.windowWidth = document.body.clientWidth;
        window.onresize = () => {
            this.windowWidth = document.body.clientWidth;
        };
        window.onscroll = ()=>{
            let top = document.documentElement.scrollTop
            if(top>400){
                this.isBackIconShow = true
            }else{
                this.isBackIconShow = false
            }
        }
    },
    data() {
        return {
            searchCondition: "",
            windowWidth: "",
            isSearchShow: false,
            isNavShow: false,
            isBackIconShow:false
        };
    },
    methods: {
        toggleSearchShow(e) {
            let search = e.target.parentElement.children[1];
            if (!this.isSearchShow) {
                search.classList.add("search-independent");
                this.isSearchShow = true;
            } else {
                search.classList.remove("search-independent");
                this.isSearchShow = false;
            }
        },
        backToTop() {
            let top = document.documentElement.scrollTop;
            let times = 0;
            var interval = setInterval(() => {
                let move = 100;
                times++;
                scroll(0, top - times * move);

                if (document.documentElement.scrollTop < move) {
                    scroll(0, 0);
                    clearInterval(interval);
                }
            }, 15);
        },
    }
};
</script>
<style lang="stylus">
.el-input {
    width: 15rem;
}
</style>
<style lang="stylus" scoped>
@media screen and (min-width: 768px) {
    .header-container {
        position: fixed;
        width: 100%;
        height: 4rem;
        background-color: white;
        box-shadow: 0 1px 6px 0px #948f8f;
        z-index: 10;

        .header {
            height: 3rem;
            line-height: 3rem;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -1.5rem;

            .logo {
                float: left;

                img {
                    height: 3rem;
                    width: 3rem;
                    vertical-align: bottom;
                }

                span {
                    color: rgb(35, 35, 33);
                    font-size: 1.5rem;
                    font-family: cursive;
                }
            }

            .nav {
                float: right;
                display: flex;

                .search {
                    margin-right: 3rem;

                    i {
                        cursor: pointer;
                    }
                }

                .nav-item {
                    margin-left: 1rem;
                    width: 6rem;

                    &:hover {
                        color: #1296db;
                    }
                }
            }
        }
    }

    .search-independent {
        display: block !important;
        position: absolute;
        right: 1rem;
        top: 0;
    }

    /* 大屏幕（大桌面显示器，大于等于 1200px） */
    @media screen and (min-width: 1200px) {
        .header {
            width: 74rem;
            margin-left: -37rem;
        }
    }

    /* 中等屏幕（桌面显示器，大于等于 992px） */
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .header {
            width: 56rem;
            margin-left: -28rem;
        }
    }

    // /* 小屏幕（平板，大于等于 768px） */
    @media screen and (min-width: 768px) and (max-width: 991px) {
        .header {
            width: 46rem;
            margin-left: -23rem;
        }
    }
}

// /* 超小屏幕（手机，小于等于 768px） */
@media screen and (max-width: 767px) {
    .header-container {
        position: fixed;
        height: 3rem;
        line-height: 3rem;
        width: 100%;
        background: #fff;

        .header {
            margin-left: 4rem;
            z-index: 10;

            .logo {
                img {
                    height: 3rem;
                    width: 3rem;
                    vertical-align: bottom;
                }

                span {
                    color: rgb(35, 35, 33);
                    font-size: 1.5rem;
                    font-family: cursive;
                }
            }

            .menu {
                font-size: 2rem;
                position: absolute;
                right: 1rem;
                top: 0.5rem;
                cursor: pointer;

                &:hover {
                    color: #1296db;
                }
            }

            .nav {
                background-color: #fff;
                position: absolute;
                left: 0;
                top: 3rem;
                width: 100%;

                .search>.el-input {
                    width: 100%;
                }

                a {
                    display: block;
                    text-align: center;

                    &:hover {
                        color: #1296db;
                    }
                }
            }
        }
    }
}

.main {
    padding-top: 5rem;
    width: 100%;
}

.backToTop {
    position: fixed;
    right: 2%;
    bottom: 3rem;
    cursor: pointer;
}
</style>
