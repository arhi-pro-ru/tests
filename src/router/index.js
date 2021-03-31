import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/result',
    name: 'QuestionResult',
    component: () => import('../views/QuestionResult.vue')
  },
  {
    path: '/question1of70',
    name: 'Question1of70',
    component: () => import('../views/question/Question1of70.vue')
  },
  {
    path: '/question2of70',
    name: 'Question2of70',
    component: () => import('../views/question/Question2of70.vue')
  },
  {
    path: '/question3of70',
    name: 'Question3of70',
    component: () => import('../views/question/Question3of70.vue')
  },
  {
    path: '/question4of70',
    name: 'Question4of70',
    component: () => import('../views/question/Question4of70.vue')
  },
  {
    path: '/question5of70',
    name: 'Question5of70',
    component: () => import('../views/question/Question5of70.vue')
  },
  {
    path: '/question6of70',
    name: 'Question6of70',
    component: () => import('../views/question/Question6of70.vue')
  },
  {
    path: '/question7of70',
    name: 'Question7of70',
    component: () => import('../views/question/Question7of70.vue')
  },
  {
    path: '/question8of70',
    name: 'Question8of70',
    component: () => import('../views/question/Question8of70.vue')
  },
  {
    path: '/question9of70',
    name: 'Question9of70',
    component: () => import('../views/question/Question9of70.vue')
  },
  {
    path: '/question10of70',
    name: 'Question10of70',
    component: () => import('../views/question/Question10of70.vue')
  },
  {
    path: '/question11of70',
    name: 'Question11of70',
    component: () => import('../views/question/Question11of70.vue')
  },
  {
    path: '/question12of70',
    name: 'Question12of70',
    component: () => import('../views/question/Question12of70.vue')
  },
  {
    path: '/question13of70',
    name: 'Question13of70',
    component: () => import('../views/question/Question13of70.vue')
  },
  {
    path: '/question14of70',
    name: 'Question14of70',
    component: () => import('../views/question/Question14of70.vue')
  },
  {
    path: '/question15of70',
    name: 'Question15of70',
    component: () => import('../views/question/Question15of70.vue')
  },
  {
    path: '/question16of70',
    name: 'Question16of70',
    component: () => import('../views/question/Question16of70.vue')
  },
  {
    path: '/question17of70',
    name: 'Question17of70',
    component: () => import('../views/question/Question17of70.vue')
  },
  {
    path: '/question18of70',
    name: 'Question18of70',
    component: () => import('../views/question/Question18of70.vue')
  },
  {
    path: '/question19of70',
    name: 'Question19of70',
    component: () => import('../views/question/Question19of70.vue')
  },
  {
    path: '/question20of70',
    name: 'Question20of70',
    component: () => import('../views/question/Question20of70.vue')
  },
  {
    path: '/question21of70',
    name: 'Question21of70',
    component: () => import('../views/question/Question21of70.vue')
  },
  {
    path: '/question22of70',
    name: 'Question22of70',
    component: () => import('../views/question/Question22of70.vue')
  },
  {
    path: '/question23of70',
    name: 'Question23of70',
    component: () => import('../views/question/Question23of70.vue')
  },
  {
    path: '/question24of70',
    name: 'Question24of70',
    component: () => import('../views/question/Question24of70.vue')
  },
  {
    path: '/question25of70',
    name: 'Question25of70',
    component: () => import('../views/question/Question25of70.vue')
  },
  {
    path: '/question26of70',
    name: 'Question26of70',
    component: () => import('../views/question/Question26of70.vue')
  },
  {
    path: '/question27of70',
    name: 'Question27of70',
    component: () => import('../views/question/Question27of70.vue')
  },
  {
    path: '/question28of70',
    name: 'Question28of70',
    component: () => import('../views/question/Question28of70.vue')
  },
  {
    path: '/question29of70',
    name: 'Question29of70',
    component: () => import('../views/question/Question29of70.vue')
  },
  {
    path: '/question30of70',
    name: 'Question30of70',
    component: () => import('../views/question/Question30of70.vue')
  },
  {
    path: '/question31of70',
    name: 'Question31of70',
    component: () => import('../views/question/Question31of70.vue')
  },
  {
    path: '/question32of70',
    name: 'Question32of70',
    component: () => import('../views/question/Question32of70.vue')
  },
  {
    path: '/question33of70',
    name: 'Question33of70',
    component: () => import('../views/question/Question33of70.vue')
  },
  {
    path: '/question34of70',
    name: 'Question34of70',
    component: () => import('../views/question/Question34of70.vue')
  },
  {
    path: '/question35of70',
    name: 'Question35of70',
    component: () => import('../views/question/Question35of70.vue')
  },
  {
    path: '/question36of70',
    name: 'Question36of70',
    component: () => import('../views/question/Question36of70.vue')
  },
  {
    path: '/question37of70',
    name: 'Question37of70',
    component: () => import('../views/question/Question37of70.vue')
  },
  {
    path: '/question38of70',
    name: 'Question38of70',
    component: () => import('../views/question/Question38of70.vue')
  },
  {
    path: '/question39of70',
    name: 'Question39of70',
    component: () => import('../views/question/Question39of70.vue')
  },
  {
    path: '/question40of70',
    name: 'Question40of70',
    component: () => import('../views/question/Question40of70.vue')
  },
  {
    path: '/question41of70',
    name: 'Question41of70',
    component: () => import('../views/question/Question41of70.vue')
  },
  {
    path: '/question42of70',
    name: 'Question42of70',
    component: () => import('../views/question/Question42of70.vue')
  },
  {
    path: '/question43of70',
    name: 'Question43of70',
    component: () => import('../views/question/Question43of70.vue')
  },
  {
    path: '/question44of70',
    name: 'Question44of70',
    component: () => import('../views/question/Question44of70.vue')
  },
  {
    path: '/question45of70',
    name: 'Question45of70',
    component: () => import('../views/question/Question45of70.vue')
  },
  {
    path: '/question46of70',
    name: 'Question46of70',
    component: () => import('../views/question/Question46of70.vue')
  },
  {
    path: '/question47of70',
    name: 'Question47of70',
    component: () => import('../views/question/Question47of70.vue')
  },
  {
    path: '/question48of70',
    name: 'Question48of70',
    component: () => import('../views/question/Question48of70.vue')
  },
  {
    path: '/question49of70',
    name: 'Question49of70',
    component: () => import('../views/question/Question49of70.vue')
  },
  {
    path: '/question50of70',
    name: 'Question50of70',
    component: () => import('../views/question/Question50of70.vue')
  },
  {
    path: '/question51of70',
    name: 'Question51of70',
    component: () => import('../views/question/Question51of70.vue')
  },
  {
    path: '/question52of70',
    name: 'Question52of70',
    component: () => import('../views/question/Question52of70.vue')
  },
  {
    path: '/question53of70',
    name: 'Question53of70',
    component: () => import('../views/question/Question53of70.vue')
  },
  {
    path: '/question54of70',
    name: 'Question54of70',
    component: () => import('../views/question/Question54of70.vue')
  },
  {
    path: '/question55of70',
    name: 'Question55of70',
    component: () => import('../views/question/Question55of70.vue')
  },
  {
    path: '/question56of70',
    name: 'Question56of70',
    component: () => import('../views/question/Question56of70.vue')
  },
  {
    path: '/question57of70',
    name: 'Question57of70',
    component: () => import('../views/question/Question57of70.vue')
  },
  {
    path: '/question58of70',
    name: 'Question58of70',
    component: () => import('../views/question/Question58of70.vue')
  },
  {
    path: '/question59of70',
    name: 'Question59of70',
    component: () => import('../views/question/Question59of70.vue')
  },
  {
    path: '/question60of70',
    name: 'Question60of70',
    component: () => import('../views/question/Question60of70.vue')
  },
  {
    path: '/question61of70',
    name: 'Question61of70',
    component: () => import('../views/question/Question61of70.vue')
  },
  {
    path: '/question62of70',
    name: 'Question62of70',
    component: () => import('../views/question/Question62of70.vue')
  },
  {
    path: '/question63of70',
    name: 'Question63of70',
    component: () => import('../views/question/Question63of70.vue')
  },
  {
    path: '/question64of70',
    name: 'Question64of70',
    component: () => import('../views/question/Question64of70.vue')
  },
  {
    path: '/question65of70',
    name: 'Question65of70',
    component: () => import('../views/question/Question65of70.vue')
  },
  {
    path: '/question66of70',
    name: 'Question66of70',
    component: () => import('../views/question/Question66of70.vue')
  },
  {
    path: '/question67of70',
    name: 'Question67of70',
    component: () => import('../views/question/Question67of70.vue')
  },
  {
    path: '/question68of70',
    name: 'Question68of70',
    component: () => import('../views/question/Question68of70.vue')
  },
  {
    path: '/question69of70',
    name: 'Question69of70',
    component: () => import('../views/question/Question69of70.vue')
  },
  {
    path: '/question70of70',
    name: 'Question70of70',
    component: () => import('../views/question/Question70of70.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
