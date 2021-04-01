<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Это упрощенный проект тестирования: Определение типичных способов поведения и личностных характеристик
      <br><a href="https://github.com/arhi-pro-ru/tests" target="_blank" rel="noopener">Для тех кто сможет прочитать исходный код - загляните на страницу исходника</a>.
    </p>
    <p>Помните! Никакие тесты, в том числе и тест на определение типа личности, не дают полной гарантии, что ваш социотип будет определён верно.<br>Подобный опрос формирует результат, основываясь на вашем мнении о себе, которое зачастую довольно субъективно.</p>
    <button>
      <h1><router-link to="/about">Пройти опрос</router-link></h1>
    </button>
    <h2>Настоящий опрос является первой частью Опросника Архи-Про(опросника архипрофессионала).</h2>
    <p>Итоги данного Опросника Архи-Про дают нам: профессионала, которому по темпераменту рекомендовано быть архи; профессионала склонного к профессиональным коммуникациям и с соответствующим уровнем организаторских склонностей; с соответствующим поведением в конфликтной ситуации; мотивации к труду и поведением в процессе труда на должном уровне; он лоялен и не истощён.</p>
    <p>Для полноценной интерпретации первых данных, полученных при исследовании типа темперамента, необходимо располагать хотя бы минимумом сведений об особенностях жизненного пути испытуемого, о его поведении и характере, условиях воспитания и обучения, о ближайшем социальном окружении. Это дает возможность сделать обоснованное диагностическое заключение и дать необходимые рекомендации.</p>
    <h3>Первый тест лишь отнесет вас в одну из групп:</h3>
    <h3>Экстраверты</h3>
    <p>Экстраверт — это психотип личности, с ярко выраженной направленностью на постоянное взаимодействие с окружающими людьми.</p>
    <ul>
      <li><a href="https://arhi-pro.ru/estp-type/" target="_blank" rel="noopener">ESTP</a></li>
      <li><a href="https://arhi-pro.ru/estj-type/" target="_blank" rel="noopener">ESTJ</a></li>
      <li><a href="https://arhi-pro.ru/esfp-type/" target="_blank" rel="noopener">ESFP</a></li>
      <li><a href="https://arhi-pro.ru/esfj-type/" target="_blank" rel="noopener">ESFJ</a></li>
      <li><a href="https://arhi-pro.ru/entj-type/" target="_blank" rel="noopener">ENTJ</a></li>
      <li><a href="https://arhi-pro.ru/enfp-type/" target="_blank" rel="noopener">ENFP</a></li>
      <li><a href="https://arhi-pro.ru/enfj-type/" target="_blank" rel="noopener">ENFJ</a></li>
      <li><a href="https://arhi-pro.ru/entp-type/" target="_blank" rel="noopener">ENTP</a></li>
    </ul>
    <h3>Интроверты</h3>
    <p>Интроверт – это психологический тип личности, замкнутого внутри своего собственного мира человека, который меньше взаимодействует с внешним миром нежели с внутренним.</p>
    <ul>
      <li><a href="https://arhi-pro.ru/istp-type/" target="_blank" rel="noopener">ISTP</a></li>
      <li><a href="https://arhi-pro.ru/istj-type/" target="_blank" rel="noopener">ISTJ</a></li>
      <li><a href="https://arhi-pro.ru/isfp-type/" target="_blank" rel="noopener">ISFP</a></li>
      <li><a href="https://arhi-pro.ru/isfj-type/" target="_blank" rel="noopener">ISFJ</a></li>
      <li><a href="https://arhi-pro.ru/intp-type/" target="_blank" rel="noopener">INTP</a></li>
      <li><a href="https://arhi-pro.ru/intj-type/" target="_blank" rel="noopener">INTJ</a></li>
      <li><a href="https://arhi-pro.ru/infp-type/" target="_blank" rel="noopener">INFP</a></li>
      <li><a href="https://arhi-pro.ru/infj-type/" target="_blank" rel="noopener">INFJ</a></li>
    </ul>
    <h3>Другие опросники</h3>
    <ul>
      <li>уровень коммуникативных и уровень организаторских склонностей</li>
      <li>поведение в конфликтной ситуации</li>
      <li>мотивации и трудового поведения</li>
      <li>лояльное отношение к организации</li>
      <li>истощение и выгорание</li>
    </ul>
    <button>
      <h1><router-link to="/about">Пройти опрос</router-link></h1>
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
