<template>
   <div id="app">
      <header>
         <div class="options">
            <a href="javascript();" class="alert">
               <img src="./images/alert.svg" alt="alert-image" />
            </a>
            <a href="javascript();" class="user">
               <span>Alex</span>
               <img src="./images/open-icon.svg" alt="arrow" />
            </a>
            <a href="javascript();" class="search">
               <img src="./images/search.svg" alt="search" />
            </a>
            <a href="javascript();" class="language">
               <span>Ru</span>
               <img src="./images/open-icon.svg" alt="arrow" />
            </a>
         </div>
      </header>

      <main>
         <div class="main-page">
            <div class="main-page__left">
               <div class="profile__selection">
                  <a class="person">
                     <span>Эксперт</span>
                     <img src="./images/open-icon.svg" alt="arrow" />
                  </a>
                  <img src="./images/expert.svg" alt="arrow" />
               </div>

               <div class="menu">
                  <div>
                     <a href="javascript();">
                        <img src="./images/analitic.svg" alt="analitic" />
                        <h3>Аналитика</h3>
                     </a>
                  </div>
                  <div>
                     <a href="javascript();">
                        <img src="./images/product.svg" alt="product" />
                        <h3>Продукт</h3>
                     </a>
                  </div>
                  <div>
                     <a href="javascript();">
                        <img src="./images/users.svg" alt="users" />
                        <h3>Пользователи</h3>
                     </a>
                  </div>
                  <div>
                     <a href="javascript();">
                        <img src="./images/constructor.svg" alt="constructor" />
                        <h3>Конструктор сайта</h3>
                     </a>
                  </div>
                  <div>
                     <a href="javascript();">
                        <img
                           src="./images/translations.svg"
                           alt="translations"
                        />
                        <h3>Трансляции</h3>
                     </a>
                  </div>
                  <div>
                     <a href="javascript();">
                        <img src="./images/mailing.svg" alt="mailing" />
                        <h3>Рассылки</h3>
                     </a>
                  </div>
                  <div>
                     <a href="javascript();">
                        <img src="./images/marketing.svg" alt="marketing" />
                        <h3>Маркетинг</h3>
                     </a>
                  </div>
                  <div>
                     <a href="javascript();">
                        <img src="./images/pay.svg" alt="pay" />
                        <h3>Платежи</h3>
                     </a>
                  </div>
                  <div>
                     <a href="javascript();">
                        <img src="./images/settings.svg" alt="settings" />
                        <h3>Настройки</h3>
                     </a>
                  </div>
               </div>
            </div>

            <div class="main-page__right">
               <div class="main-page__right_top">
                  <div class="filters">
                     <a href="#" class="calendar" @click="openFilters">
                        <img src="./images/calendar.svg" alt="calendar" />
                        <span>За 1 день</span>
                        <img src="./images/open-icon.svg" alt="arrow" />
                     </a>
                     <a href="javascript();" class="filter">
                        <img src="./images/filter.svg" alt="filter" />
                        <span>Фильтр</span>
                        <img src="./images/open-icon.svg" alt="arrow" />
                     </a>
                     <div class="filters-block">
                        <div class="calendar-filter">
                           <ul>
                              <li :class="{ active_btn: filter === 'all' }">
                                 <a
                                    href="#"
                                    @click="(filter = 'all'), removeDisabled()"
                                    >Весь срок</a
                                 >
                              </li>
                              <li :class="{ active_btn: filter === 'today' }">
                                 <a
                                    href="#"
                                    @click="
                                       (filter = 'today'), removeDisabled()
                                    "
                                    >Сегодня</a
                                 >
                              </li>
                              <li
                                 :class="{ active_btn: filter === 'yesterday' }"
                              >
                                 <a
                                    href="#"
                                    @click="
                                       (filter = 'yesterday'), removeDisabled()
                                    "
                                    >Вчера</a
                                 >
                              </li>
                              <li
                                 :class="{ active_btn: filter === 'sevenDays' }"
                              >
                                 <a
                                    href="#"
                                    @click="
                                       (filter = 'sevenDays'), removeDisabled()
                                    "
                                    >Последние 7 дней</a
                                 >
                              </li>
                              <li
                                 :class="{
                                    active_btn: filter === 'thirtyDays',
                                 }"
                              >
                                 <a
                                    href="#"
                                    @click="
                                       (filter = 'thirtyDays'), removeDisabled()
                                    "
                                    >Последние 30 дней</a
                                 >
                              </li>
                              <li
                                 :class="{ active_btn: filter === 'thisMonth' }"
                              >
                                 <a
                                    href="#"
                                    @click="
                                       (filter = 'thisMonth'), removeDisabled()
                                    "
                                    >В этом месяце</a
                                 >
                              </li>
                              <li :class="{ active_btn: filter === 'exMonth' }">
                                 <a
                                    href="#"
                                    @click="
                                       (filter = 'exMonth'), removeDisabled()
                                    "
                                    >Прошлый месяц</a
                                 >
                              </li>
                           </ul>
                        </div>
                        <div class="table-calendar">
                           <div class="top-row">
                              <div class="main">
                                 <button
                                    v-on:click="decrease"
                                    class="decrease"
                                 ></button>
                                 <ul>
                                    <li>{{ monthes[month] }}, {{ year }}</li>
                                 </ul>
                                 <button
                                    v-on:click="increase"
                                    class="increase"
                                 ></button>
                              </div>
                              <ul class="days">
                                 <li
                                    v-for="(d, indexDay) in day"
                                    :key="indexDay"
                                 >
                                    {{ d }}
                                 </li>
                              </ul>
                           </div>
                           <table>
                              <tr v-for="(week, i) in calendar()" :key="i">
                                 <td
                                    v-for="(day, index) in week"
                                    :key="index"
                                    :class="{
                                       active:
                                          day.index === new Date().getDate() &&
                                          new Date().getMonth() === month,
                                    }"
                                 >
                                    {{ day.index }}
                                 </td>
                              </tr>
                           </table>

                           <div class="table-calendar_bottom">
                              <a href="#" class="reset" @click="reset"
                                 >Отмена</a
                              >
                              <a
                                 href="#"
                                 class="reload disabled"
                                 @click="reload"
                                 >Обновить</a
                              >
                           </div>
                        </div>
                        <div class="blur"></div>
                     </div>
                  </div>
                  <div class="filter-buttons">
                     <a href="javascript();" class="unload">Выгрузить</a>
                     <a href="javascript();" class="refresh">Обновить</a>
                  </div>
               </div>
               <div class="main-page__right_table">
                  <div class="head__table-list">
                     <ul>
                        <li>
                           <input type="checkbox" />
                        </li>
                        <li>
                           <span>Пользователь</span>
                        </li>
                        <li>
                           <span>Дата регистрации</span>
                        </li>
                        <li>
                           <span>Последняя активность</span>
                        </li>
                        <li>
                           <span>Последнее действие</span>
                        </li>
                        <li>
                           <span>Продукт</span>
                        </li>
                        <li>
                           <span>Отобразить 15</span>
                           <img src="./images/open-icon.svg" alt="arrow" />
                        </li>
                     </ul>
                  </div>
                  <div class="table-list">
                     <ul>
                        <li v-for="(item, index) in filteredUsers" :key="index">
                           <ul>
                              <li>
                                 <input type="checkbox" />
                              </li>
                              <li>
                                 <div>
                                    <span>{{ item.user }}</span>
                                    <span>{{ item.email }}</span>
                                 </div>
                              </li>
                              <li>
                                 <span>{{
                                    monthes[
                                       item.registration.split(".")[1] - 1
                                    ] +
                                       " " +
                                       item.registration.split(".")[0] +
                                       ", " +
                                       "20" +
                                       item.registration.split(".")[2]
                                 }}</span>
                              </li>
                              <li>
                                 <span>{{
                                    monthes[item.active.split(".")[1] - 1] +
                                       " " +
                                       item.active.split(".")[0] +
                                       ", " +
                                       "20" +
                                       item.active.split(".")[2]
                                 }}</span>
                              </li>
                              <li>
                                 <span>{{ item.act }}</span>
                              </li>
                              <li>
                                 <span>{{ item.product }}</span>
                              </li>
                              <div class="icons">
                                 <a href="#">
                                    <img
                                       src="./images/pencil.svg"
                                       alt="pencil"
                                    />
                                 </a>
                                 <a href="#">
                                    <img
                                       src="./images/backet.svg"
                                       alt="backet"
                                    />
                                 </a>
                              </div>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script>
export default {
   name: "App",
   components: {},
   data() {
      return {
         month: new Date().getMonth(),
         year: new Date().getFullYear(),
         dFirstMonth: "1",
         day: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
         monthes: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
         ],
         date: new Date(),
         dateNowMonth: new Date().getMonth(),
         filter: "all",
         dataFromServer: [
            {
               user: "user1",
               email: "user@user.com",
               registration: "10.4.20",
               active: "10.4.20",
               act: "view_landing_course1",
               product: "Как наладить отнош",
            },
            {
               user: "user2",
               email: "user@user.com",
               registration: "10.4.20",
               active: "3.3.20",
               act: "view_landing_course1",
               product: "Как наладить отнош",
            },
            {
               user3: "user3",
               email: "user@user.com",
               registration: "10.4.20",
               active: "15.4.20",
               act: "view_landing_course1",
               product: "Как наладить отнош",
            },
            {
               user: "user4",
               email: "user@user.com",
               registration: "10.4.20",
               active: "27.3.20",
               act: "view_landing_course1",
               product: "Как наладить отнош",
            },
         ],
      };
   },
   methods: {
      calendar: function() {
         let days = [];
         let week = 0;
         days[week] = [];
         let dlast = new Date(this.year, this.month + 1, 0).getDate();
         for (let i = 1; i <= dlast; i++) {
            if (
               new Date(this.year, this.month, i).getDay() != this.dFirstMonth
            ) {
               let a = { index: i };
               days[week].push(a);
            } else {
               week++;
               days[week] = [];
               let a = { index: i };
               days[week].push(a);
            }
         }
         if (days[0].length > 0) {
            for (let i = days[0].length; i < 7; i++) {
               days[0].unshift("");
            }
         }
         this.dayChange;
         return days;
      },
      decrease: function() {
         this.month--;
         if (this.month < 0) {
            this.month = 12;
            this.month--;
            this.year--;
         }
         this.filter = "all";
      },
      increase: function() {
         this.month++;
         if (this.month > 11) {
            this.month = -1;
            this.month++;
            this.year++;
         }
      },
      openFilters() {
         let filter = document.querySelector(".filters-block");
         filter.classList.add("open__filters");
      },
      removeDisabled() {
         let reload = document.querySelector(".table-calendar_bottom .reload");
         reload.classList.remove("disabled");
      },
      reset() {
         this.filter = "all";
         let filter = document.querySelector(".filters-block");
         let reload = document.querySelector(".table-calendar_bottom .reload");
         filter.classList.remove("open__filters");
         reload.classList.add("disabled");
      },
      reload() {
         let filter = document.querySelector(".filters-block");
         filter.classList.remove("open__filters");
      },
   },
   computed: {
      filteredUsers() {
         let nowDateVariable = new Date().getDate();
         let nowMonthVariable = new Date().getMonth();
         if (this.filter === "all") {
            return this.dataFromServer;
         } else if (this.filter === "today") {
            return this.dataFromServer.filter(
               (el) =>
                  Number(el.active.split(".")[0]) === nowDateVariable &&
                  Number(el.active.split(".")[1] - 1) === nowMonthVariable
            );
         } else if (this.filter === "yesterday") {
            return this.dataFromServer.filter(
               (el) =>
                  Number(el.active.split(".")[0]) === nowDateVariable - 1 &&
                  Number(el.active.split(".")[1] - 1) === nowMonthVariable
            );
         } else if (this.filter === "sevenDays") {
            return this.dataFromServer.filter(
               (el) =>
                  Number(el.active.split(".")[0]) >= nowDateVariable - 7 &&
                  Number(el.active.split(".")[1] - 1) === nowMonthVariable
            );
         } else if (this.filter === "thirtyDays") {
            return this.dataFromServer.filter(
               (el) => Number(el.active.split(".")[0]) >= nowDateVariable - 30
            );
         } else if (this.filter === "thisMonth") {
            return this.dataFromServer.filter(
               (el) => Number(el.active.split(".")[1] - 1) === nowMonthVariable
            );
         } else if (this.filter === "exMonth") {
            return this.dataFromServer.filter(
               (el) =>
                  Number(el.active.split(".")[1] - 1) === nowMonthVariable - 1
            );
         }
         return this.dataFromServer;
      },
   },
};
</script>

<style lang="scss">
body {
   margin: 0;
   padding: 0;
}

#app {
   background-color: #f0f6fc;
   height: 100%;
   padding: 0 38px;
}

.options {
   padding: 10px 0 0 0;
   display: flex;
   justify-content: flex-end;
   > a {
      color: #000;
      text-decoration: none;
      box-shadow: 0px 10px 40px rgba(213, 221, 230, 0.6);
      margin-right: 17px;
      cursor: pointer;
      display: flex;
      align-items: center;
   }
   .alert {
      width: 43px;
      height: 43px;
      border-radius: 50px;
      background-color: #fff;
      justify-content: center;
   }
   .user {
      width: 120px;
      height: 43px;
      border-radius: 100px;
      background-color: #fff;
      justify-content: space-evenly;
   }
   .search {
      width: 43px;
      height: 43px;
      border-radius: 50px;
      background: rgba(203, 215, 228, 0.4);
      justify-content: center;
   }
   .language {
      width: 64px;
      height: 43px;
      border-radius: 100px;
      background: rgba(203, 215, 228, 0.4);
      justify-content: space-evenly;
   }
}

.main-page {
   display: flex;
   margin-top: 45px;
   padding-bottom: 65px;
   &__left {
      margin-right: 50px;
      .profile__selection {
         width: 236px;
         height: 54px;
         background-color: #fff;
         border-radius: 10px;
         display: flex;
         margin-bottom: 11px;
         .person {
            width: 177px;
            border-radius: 10px;
            box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2);
            cursor: pointer;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            margin-right: 16px;
         }
      }
      .menu {
         display: flex;
         flex-direction: column;
         width: 177px;
         height: 847px;
         background: #ffffff;
         box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2);
         border-radius: 10px;
         padding: 9px;
         box-sizing: border-box;
         > div {
            width: 158px;
            height: 85px;
            border: 1px solid #e7ecf1;
            box-sizing: border-box;
            border-radius: 6px;
            margin-bottom: 8px;
            a {
               color: #000;
               text-decoration: none;
               display: flex;
               flex-direction: column;
               justify-content: center;
               width: 100%;
               height: 100%;
               &:hover {
                  background: rgba(203, 215, 228, 0.4);
               }
               img {
                  margin-bottom: 15px;
               }
               h3 {
                  margin: 0;
                  display: flex;
                  justify-content: center;
                  font-size: 15px;
               }
            }
         }
         div:nth-child(3) {
            border: 1px solid#FF7439;
            h3 {
               color: #ff7439;
            }
         }
      }
   }
   &__right {
      width: 100%;
      border-radius: 10px;
      padding: 0 10px;
      &_table {
         margin-top: 10px;
         background: #fff;
         border-radius: 10px;
         .head__table-list {
            height: 62px;
            ul {
               margin: 0;
               padding: 0;
               list-style: none;
               display: flex;
               align-items: center;
               justify-content: space-between;
               height: 100%;
               display: grid;
               grid-template-columns: 4% 16% 16% 18% 16% 14% 16%;
               justify-items: center;
               li {
                  span {
                     font-weight: bold;
                  }
               }
            }
            input {
               position: relative;
               visibility: hidden;
               &::after {
                  content: "";
                  width: 26px;
                  height: 26px;
                  border: 2px solid rgba(131, 142, 157, 0.3);
                  box-sizing: border-box;
                  visibility: visible;
                  display: block;
                  border-radius: 50px;
                  cursor: pointer;
                  position: absolute;
                  top: -7px;
               }
            }
         }
         .table-list {
            ul {
               margin: 0;
               padding: 0;
               list-style: none;

               li {
                  ul {
                     margin: 0;
                     padding: 0;
                     list-style: none;
                     display: grid;
                     grid-template-columns: 4% 16% 16% 18% 16% 14% 16%;
                     justify-items: center;
                     height: 57px;
                     align-items: center;
                     div {
                        display: flex;
                        flex-direction: column;
                     }
                     li {
                        input {
                           position: relative;
                           visibility: hidden;
                           &::after {
                              content: "";
                              width: 26px;
                              height: 26px;
                              border: 2px solid rgba(131, 142, 157, 0.3);
                              box-sizing: border-box;
                              visibility: visible;
                              display: block;
                              border-radius: 50px;
                              cursor: pointer;
                              position: absolute;
                              top: -7px;
                           }
                        }
                     }
                  }
               }
            }
            .icons {
               display: flex;
               flex-direction: row;
               a:first-child {
                  margin-right: 10px;
               }
            }
         }
      }
      &_top {
         width: 100%;
         height: 85px;
         border-radius: 10px;
         background-color: #fff;
         display: flex;
         justify-content: space-between;
         padding: 20px;
         box-sizing: border-box;
         .filters {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            a {
               text-decoration: none;
               display: flex;
               align-items: center;
               img {
                  &:first-child {
                     margin-right: 20px;
                  }
               }
               span {
                  color: #000;
                  margin-right: 10px;
               }
               &:first-child {
                  margin-right: 45px;
               }
            }
         }
         .filter-buttons {
            display: flex;
            .unload {
               width: 120px;
               height: 45px;
               border: 2px solid #000000;
               box-sizing: border-box;
               border-radius: 7px;
               color: #000;
               text-decoration: none;
               display: flex;
               justify-content: center;
               align-items: center;
               margin-right: 15px;
               &:hover {
                  background: #000;
                  color: #fff;
               }
            }
            .refresh {
               width: 199px;
               height: 45px;
               background: #ff7439;
               border-radius: 7px;
               color: #fff;
               text-decoration: none;
               display: flex;
               justify-content: center;
               align-items: center;
            }
         }
         .filters-block {
            position: absolute;
            top: 165px;
            left: 360px;
            display: flex;
            visibility: hidden;
         }
         .calendar-filter {
            width: 176px;
            height: 346px;
            background: #ffffff;
            box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2);
            border-radius: 10px;
            margin-right: 8px;
            box-sizing: border-box;
            padding: 10px 10px;
            ul {
               list-style: none;
               margin: 0;
               padding: 0;
               li {
                  height: 39px;
                  padding: 0 14px;
                  border: 2px solid #fff;
                  border-radius: 10px;
                  &:hover {
                     border: 2px solid #ebeef3;
                  }
                  a {
                     width: 100%;
                     height: 100%;
                     color: #000;
                     margin-right: 0 !important;
                     display: flex;
                     justify-content: flex-start;
                     align-items: center;
                     font-size: 15px;
                  }
               }
            }
            .active_btn {
               background: #f0f3f8;
               border: 2px solid #f0f3f8;
               &:hover {
                  border: 2px solid #f0f3f8;
               }
            }
         }
         .table-calendar {
            width: 288px;
            height: max-content;
            padding-bottom: 10px;
            min-height: 332px;
            box-sizing: border-box;
            background: #ffffff;
            box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2);
            border-radius: 10px;
            td {
               text-align: center;
            }
            .top-row {
               .main {
                  height: 57px;
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  ul {
                     margin: 0;
                     padding: 0;
                     list-style: none;
                  }
               }
               .days {
                  display: flex;
                  justify-content: space-around;
                  margin: 0;
                  padding: 0;
                  list-style: none;
                  background: #f3f8fd;
                  padding: 17px 0 8px 0;
                  li {
                     font-weight: bold;
                  }
               }
               .decrease,
               .increase {
                  width: 24px;
                  height: 24px;
                  border: 2px solid #000;
                  border-radius: 50px;
                  cursor: pointer;
                  outline: none;
                  position: relative;
               }
               .decrease {
                  &:after {
                     content: url("./images/arrow-left.svg");
                     position: absolute;
                     top: 3px;
                     left: 6px;
                  }
               }
               .increase {
                  &:after {
                     content: url("./images/arrow-right.svg");
                     position: absolute;
                     top: 4px;
                     right: 5px;
                  }
               }
            }
            table {
               width: 100%;
               background: #f3f8fd;
               td {
                  padding: 8px;
                  cursor: pointer;
               }
            }
            .active {
               width: 28px;
               height: 28px;
               padding: 5px;
               box-sizing: border-box;
               background: #ff7439;
               border-radius: 50px;
            }
            &_bottom {
               display: flex;
               justify-content: space-evenly;
               padding-top: 10px;
               .reset {
                  width: 130px;
                  height: 45px;
                  border: 2px solid #000000;
                  box-sizing: border-box;
                  border-radius: 7px;
                  color: #000;
                  display: flex;
                  justify-content: center;
                  margin-right: 7px !important;
                  cursor: pointer;
                  &:hover {
                     background: #000;
                     color: #fff;
                  }
               }
               .reload {
                  width: 130px;
                  height: 45px;
                  background: rgba(255, 116, 57, 1);
                  box-sizing: border-box;
                  border-radius: 7px;
                  color: #fff;
                  display: flex;
                  justify-content: center;
                  cursor: pointer;
               }
               .disabled {
                  background: rgba(255, 116, 57, 0.5);
                  pointer-events: none;
               }
            }
            .selected-seven {
               position: relative;
               &:after {
                  content: "";
                  background: rgba(255, 116, 57, 0.2);
                  display: block;
                  width: 42px;
                  height: 35px;
                  position: absolute;
                  top: 0;
                  left: 0;
               }
            }
            .start_selected,
            .end_selected {
               position: relative;
               z-index: 1;
               &::after {
                  background: rgba(255, 116, 57, 0.2);
                  display: block;
                  width: 20px;
                  height: 35px;
                  position: absolute;
                  top: 0;
               }
               &::before {
                  content: "";
                  width: 36px;
                  height: 34px;
                  border-radius: 50px;
                  background: #ff7439;
                  display: block;
                  position: absolute;
                  top: 0;
                  left: -3px;
                  z-index: -1;
               }
            }
            .end_selected {
               &:after {
                  left: 14px;
               }
            }
         }
      }
   }
}
.main-page__right_top .open__filters {
   visibility: visible;
   .blur {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      background: rgba(240, 246, 252, 0.7);
   }
   .calendar-filter,
   .table-calendar {
      z-index: 1;
   }
}
</style>
