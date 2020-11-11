# Теоретические вопросы
## 1. Отличия хорошего клиентского приложения от плохого.
### Для пользователя:

* Ключевые части пользовательского интерфейса должны загружаться как можно быстрее - особенно критично в условиях, когда приложение/сайт не имеют широкой популярности, а его контент/функциональная составляющая не несут в себе ничего уникального - в таких условиях пользователь может абсолютно безболезненно для себя перейти на приложение схожей категории.

* Основной контент не должен быть захламлен второстепенными ссылками, сторонними виджетами, рекламой и прочими элементами, не относящимися напрямую к предоставлению пользователю ценности. В противном случае, негативный пользовательский опыт не заставит себя ждать.

* Навигация внутри сайта не должна быть громоздкой, избыточной. С увеличением объема контента может возникнуть соблазн разместить детальные многоуровневые навигационные панели, чтобы пользователь мог добраться до любой части сайта в пару кликов. Однако в данном случае, чем перегружать ссылками навигационную панель, адекватнее будет оставить там только самые важные ссылки, разбивающие контент на логичные, интуитивно понятные категории, внутри которых могут быть ссылки более низкого порядка, и для которых не всегда обязательно наличие целого раздела или контейнера, а достаточно отдельных элементов UI: иконок, аватаров, заголовков и т.д.

* Желательно, чтобы действия, совершаемые пользователями в приложении, были прозрачными, не имеющими сайд-эффектов, не связанных с основной пользовательской проблемой/задачей. Кроме того, немаловажной является и обратная связь, интерактивность со стороны клиентского приложения - пользователь таким образом получает визуальный отклик на свои действия и имеет большее представление о статусе той или иной операции.

* Крайне желательно, чтобы все важные действия (критерии важности определяются спецификой приложения), непосредственно влияющие на решение пользователем своих проблем/задач, запрашивали подтверждение и/или имели возможность отмены. _Пример: на сайте HeadHunter отклик на вакансию подается по нажатию соответствующей кнопки без какого-либо подтверждения или возможности отозвать отклик при случайном нажатии - таким образом, единственным способом оповестить работодателя о том, почему Front-end разработчик метит на позицию системного администратора, является отправка личного сообщения работодателю_. На мой взгляд, подобное решение при проектировании взаимодействия соискателя и работодателя не несет в себе никакой выгоды, а напротив, способствует ухудшению пользовательского опыта.

* В условиях постоянного роста доли мобильного трафика, а также увеличения разнообразия устройств, имеющих доступ к интернету, крайне важно для хорошего клиентского приложения адекватно отображать пользовательский интерфейс независимо от того, какой именно девайс используется для взаимодействия с клиентским приложением. Очевидно, что покрытие абсолютно всех типов устройств не является необходимостью - в сущности достаточно лишь того спектра, в который входят предпочтения значительной части реальной и потенциальной целевой аудитории сайта.

* Если есть вероятность, что среди целевой аудитории приложения есть люди с ограниченными возможностями, то для такого приложения очевидным преимуществом будут являться дополнительные возможности интерфейса, помогающие таким людям беспрепятственно взаимодействовать с сайтом. Примерами подобных решений могут быть версии для слабовидящих, версии для страдающих дальтонизмом, поддержка скринридеров и др.

* Не стоит забывать и о безопасности клиентского приложения. Так, например, хорошее клиентское приложение должно адекватно оперировать конфиденциальными пользовательскими данными: не отправлять с GET-запросами эти данные, не хранить их в локальном/сессионном хранилищах, выставлять ограничения на файлы cookie.

* Наконец, в зависимости от специфики сайта, пользователям может быть очень важна визуальная составляющая интерфейса: красивые анимации, приятная цветовая гамма, нестандартное (в рамках адекватности) наполнение.

### Для дизайнера:
* Для дизайнеров одним из признаков качественного клиентского приложения является грамотно выстроенная структура контента, при которой пользователь не испытывает неудобств и трудностей при навигации по интерфейсу сайта. В такой структуре внимание пользователя сосредоточено на основном контенте страницы/приложения, а все необходимые элементы навигации находятся на виду, не отвлекая при этом и не перетягивая на себя взгляд. В большинстве случаев в хорошем клиентском приложении соблюдаются популярные, проверенные временем практики UX/UI, позволяющие пользователям при переходе от сайта к сайту не испытывать дискомфорт. С противном же случае, если данные практики намеренно не соблюдаются в силу уникального дизайнерского решения или специфичной концепции приложения, то необходимо вести пользователя, спроектировать интерфейс таким образом, чтобы у пользователя не возникало ощущения неопределенности, непонятности, дискомфорта.

* Во многом то, что описано пунктом выше достигается с помощью контраста. Контраст - мощный инструмент управления пользовательским вниманием, и от его применения безусловно зависит качество клиентского приложения.
Как ни странно, отличительным признаком именно хорошего клиентского приложения является контраст построенный таким образом, при котором внимание пользователя следует заранее спроектированному маршруту от знакомства с сайтом до определенного полезного активного действия (оформление подписки, заказа, просмотр какого-либо ресурса и т.д.). Помимо акцентирования пользовательского внимания, контраст также выполняет и чисто практическую функцию - позволяет обеспечить лучшее восприятие информации, читаемость контента. Естественно, приложения, в которых огромные ссылки на внешние источники пестрят всеми цветами радуги, а основной контент страницы представлен мелким черным текстом на темно-синем фоне, не могут претендовать на звание качественных с точки зрения дизайнера.

* Цветовая гамма, используемая в дизайне UI, является одним из инструментов, определяющих посыл, атмосферу, которые подсознательно воспринимаются пользователем. Грамотное управление цветом помогает значительно повысить качество UX, поскольку дает пользователю визуальное представление о специфике приложения, задает нужный настрой/вайб, а также предоставляет пользователю более эффективный фидбек на совершаемые им действия, переходы, операции. В хорошем пользовательском приложении должны отсутствовать (или крайне осторожно использоваться) максимально насыщенные цвета, так как они выглядят крайне неестественно и зачастую раздражают внимание пользователей (еще сильнее раздражают сочетания таких цветов). Грамотное цветовое оформление подразумевает __соответствие цветового тона корпоративному стилю, фирменной идее__ и __доминирование нейтральных цветовых тонов__ - первое, очевидно, передает правильный посыл пользователю о сайте/приложении, а также о предоставляемых услугах, второе обусловленно тем, что в условиях спокойной цветовой гаммы намного легче выделить контрастом действительно важные компоненты интерфейса.

* Типографика, как и цвет, передает пользователю информацию о характере контента на сайте/приложении - это означает, что выбор шрифта играет серьезную роль при определении качества клиентского приложения с точки зрения дизайнеров. Адекватная типографика предполагает множество решений:
  1. Выбор семейства шрифтов (с засечками, без засечек, моношрифты, пропись и т.д.). В зависимости от специфики приложения и оказываемых услуг, каждое из семейств шрифтов может оказаться полезным в определенных случаях. Так, шрифты с засечками больше соответствуют компаниям с претензией на формальность, некую элитарность и строгость. Шрифты без засечек - наоборот передают более неформальную атмосферу. Остальные семейства редко используются в качестве основных, так как это мешает читаемости и, соответственно, восприятию контента.

  2. Выбор шрифтов. Как правило, хорошей практикой считается применять шрифты, принадлежащие к одному семейству, поскольку именно такой подход не требует особых усилий и не вызывает подсознательного диссонанса у пользователя. В случае, когда семейства шрифтов комбинируются, необходимо четко понимать, с какой именно целью.

  3. Выбор начертания. При выборе начертания хороший дизайнер будет руководствоваться принципами создания правильного контраста. Следовательно, в качественном клиентском приложении не должно присутствовать сборной солянки из жирных/полужирных/курсивов т.д. шрифтов - для каждого начертания в хорошем дизайне должна быть определена цель: как правило, тонкое начертание используется при стилизации заголовков, так как их больший размер компенсирует недостаток толщины, жирные шрифты используются для выделения ключевой или важной информации в тексте, а курсив - для акцентирования внимания на определенных терминах, названиях, иностранных выражениях.

  4. Определение межбуквенных и межстрочных интервалов. Данные интервалы влияют на читаемость текста: по сути, сайт на котором используются стандартные настройки для интервалов уже является неплохим при прочих равных, однако ничто не мешает компетентному дизайнеру подобрать такие значения, которые визуально сделают интерфейс приложения еще более привлекательным. Показателем плохого интерфейса в данном контексте могут быть слишком большие интервалы, вызывающие разрыв слов и вынуждающие всматриваться в текст, чтобы вычленить из него слова, или же слишком маленькие, приводящие к коллизии букв и их наложению друг на друга.
Помимо вышеприведенных решений, принятие которых влияет на качество типографики в приложении, также не стоит забывать и о том, что тексты, растянутые на всю ширину экрана читать крайне неудобно. По этой причине необходимо управлять шириной контента таким образом, чтобы на строку приходилось ~50-70 символов.

* Не стоит забывать и про адаптивность, которая для дизайнеров точно так же играет важную роль, поскольку масштабировать контент таким образом, чтобы он смотрелся органично на всех необходимых устройствах, руководствуясь при этом фиксированным разрешением дисплея, лично я не представляю возможным. Исходя из этого, сайт/приложение, не поддерживающие адаптивность, априори не могут являться совершенными с точки зрения дизайнера.

* Вишенкой на торте пользовательского интерфейса являются анимации. Однако сами по себе они не являются чем-то обязательно улучшающим пользовательский опыт, так как здесь все зависит от компетентности того, кто их продумывает или реализует. Так, например, хорошим тоном являются ненавязчивые, плавные анимации, выглядящие естественно. В противовес им, в относительно плохих клиентских приложениях можно наткнуться резкие переходы состояний, линейную скорость изменения, неестественно большую и навязчивую амплитуду значений (например `transform: scale(2)`) и прочий полет фантазии, который любители могут счесть чем-то "находчивым". Хотя даже такие анимации, в зависимости от контекста, могут быть уместными, если, например, данная абсурдность была реализована намеренно.

### Для менеджера:
* Для менеджера хорошим является то приложение, которое соответствует требованиям заказчика. По сути, если в клиентском приложении соблюдены функциональные требования, требования к безопасности и надежности, требования к дизайну и прочие, то приложение хорошее, если нет - плохое или, по крайней мере, неудовлетворительное.

* Менеджер несет ответственность за то, чтобы обязательства перед заказчиком выполнялись в срок, следовательно, каким бы идеальным ни было конечное приложение, если оно не было завершено в установленные сроки, то и актуальность его находится под сомнением.

* Так как разработка приложений/сайтов ведется не одним человеком, а командой разработчиков, важно отметить, что критерием качественного клиентского приложения (да и любого другого приложения) является чистота кода, определяемая набором соглашений и конвенций по тому, какие практики и паттерны используются при разработке, каким образом форматируется код, какой стиль используется для нейминга переменных и т.д. Чистота кода как таковая не является самоцелью и несет ценность разве что эстетическую, однако тот факт, что разработка ведется в условиях ограниченных временных и человеческих ресурсов, не позволяет терять свободные часы на изучение и вникание в десятки разных стилей и подходов к написанию кода.

* Еще одним важным показателем хорошего приложения для менеджера является его покрытие тестами как модульными, так и интеграционными. Опять же, тестирование не является самоцелью - оно призвано сэкономить время на разработке. С приложением, которое не протестированно должным образом (с использованием автоматизированных тестов или же вручную), менеджер не может быть уверен в том, что оно соответствует требованиям заказчика, а разработчики, внезапно обнаружившие ошибку, в свою очередь, не могут быть уверены в том, что ошибка была вызвана их действиями, а не существовала ранее.

### Для верстальщика:
* Для верстальщика, как ни странно, важна верстка, и приложение, построенное на основе устаревших, потерявших свою актуальность малоэффективных практик, не может вызывать симпатии у компетентного верстальщика. Поскольку подходы к верстке со временем эволюционировали, то и современное клиентское приложение, претендующее на звание качественного должно отвечать более строгим требованиям, а именно:
  1. Приложение должно быть написано в соответствии со спецификацией HTML5, поскольку она предлагает набор семантических тегов, ориентированных на более эффективный парсинг браузерами и другими устройствами, считывающими контент с веб-страниц.
  2. В верстке приложения крайне нежелательно наличие устаревших, _deprecated_ html-атрибутов, определяющих стили элементов, так как для этого уже давно используется CSS.
  3. Верстка не должна быть избыточной. Приложение, в котором для верстки одного контейнера с текстом создается таблица-в-таблице-в-таблице, никоим образом не может называться не только хорошим, но и адекватным с точки зрения верстальщика.
  4. Стили не должны быть слишком специфичными т.е. назначенными с помощью ID, инлайнового атрибута `style` или директивы `!important`, поскольку в дальнейшем подобную верстку будет тяжело дополнять и/или кастомизировать.

* Хорошее приложение в понимании верстальщика также должно быть совместимо со всеми современными (а иногда не только современными) браузерами - какой толк от сайта, который невозможно открыть на большинстве доступных на сегодняшний день популярных обозревателей? Это не означает, что современные нововведения портят верстку: просто необходимо иметь план на случай, если эти нововведения не поддерживаются, например, директива `@supports` в CSS, позволяющая проигнорировать не поддерживаемые свойства и применить _fallback_-стили.

* Нейминг сущностей в верстке играет не самую последнюю роль в определении качества конечного приложения/сайта, поскольку от нейминга классов, идентификаторов может в будущем зависеть то, как будут выглядеть таблицы стилей: в плохом клиентском приложении нет определенной логики наименования сущностей, сущности могут называться как с использованием английских слов, так и с помощью транслитерации, нет критериев разделения на классы, из-за чего стили постоянно дублируются, а добавление новых элементов к пользовательскому интерфейсу обязательно порождает соответствующие наборы классов и CSS-правил. В хорошем приложении нейминг подчиняется определенным правилам, классы составляются на основе приципов единственной ответственности и открытости-закрытости и т.д.

* Наконец, всеми любимая адаптивность не обходит стороной и верстальщиков.

### Для серверного программиста:
* Для серверного программиста имеет значение трафик, частота запросов к серверу и способность последнего обработать все входящие запросы клиентов. Зачастую пользовательский ввод бывает некорректным: либо не соответствует API сервера, либо не удовлетворяет требованиям валидации, либо вовсе оказывается случайным. Хорошее клиентское приложение должно предусматривать подобные сценарии взаимодействия с пользователем и проводить валидацию ввода перед отправкой на сервер, что в свою очередь освобождает сервер от необходимости обрабатывать заведомо невалидный запрос.

* Из тех же соображений минимизации запросов к серверу, хорошее клиентское приложение обращается к серверу только в тех ситуациях, когда пользователю необходимо прочитать или изменить данные, а вся остальная логика, связанная с вычислениями, расчетами, сортировкой и прочими процедурами, не требующими подключения к удаленному ресурсу, должна выполняться именно на стороне клиента. Это же добавляет приложению автономии, сокращает количество серверного кода, а также сокращает время пользовательского ожидания выполнения той или иной операции.

* Не менее важно для серверного программиста, чтобы клиентское приложение было безопасным и не хранило конфиденциальные данные такие как ключи API, JWT и прочую информацию о сессии в локальном/сессионном хранилищах или в cookie-файлах, доступных из JavaScript.

## 2. Основные особенности разработки крупных многостраничных сайтов.
Опыта разработки именно крупных многостраничных сайтов у меня пока еще не было: до того, как я попал на предыдущее место работы, я успел выполнить несколько небольших заказов на сайты примерно в 5-10 страниц с простым API на GET/POST (поиск, создание постов, чат и т.д.) На предыдущем месте работы я занимался разработкой SPA-приложений. Поэтому, наверное, сначала я расскажу о техологиях, которыми пользовался в рамках рабочих проектов, а также вопросов, возникавших по ходу разработки, а после этого выскажу свои предположения касательно основных особенностей разработки многостраничных сайтов с перспективой дополнения/изменения функционала.

Одним из проектов, которым я занимался, была корпоративная система обучения, предназначенная для набора потоков людей на стажировки, мониторинга их прогресса и предоставление функционала для проведения корпоративных теоретических и практических занятий (просмотры лекций, загрузка и мониторинг домашних заданий, составление и публикация расписаний и т.д.)

Поскольку я попал в проект практически на начале его реализации, актуальными были вопросы относительно того, какие технологии использовать, например:
* Что использовать на стороне клиента - альтернатив было немного: Angular и Vue были отброшены практически сразу (первый не подходил по причине своей комплексности, что в рамках данного относительно небольшого проекта не требовалось, а второй просто не прижился, так как для него не было достаточного количества разработчиков). Выбор остался между JQuery и React, и поскольку полезность первого уже не так заметна, как, например году в 2010, а реакт предлагал, в свою очередь, скорость, инкапсуляцию компонентов и декларативность - решили остановиться на последнем.

* Период начала разработки выпал на довольно серьезные изменения в структуре реакт-приложений: выход версии 16.8 библиотеки React и выход версии 4.0 библиотеки React-Router. Релиз первой принес с собой поддержку React Hooks, а второй добавил поддержку динамического раутинга с помощью реакт-компонентов. По этой причине, через некоторое время после начала разработки команда начала расходиться во мнении, что именно использовать в создании UI - классовые компоненты или же функциональные, которые теперь, помимо того, что стали равными классовым по своим возможностям, еще и предоставляли бОльшую гибкость благодаря отсутствию лишнего шаблонного кода а-ля `this.handle = this.handle.bind(this);` или благодаря `useEffect`, который избавил от необходимости дублировать действия, общие для `componentDidMount` и `componentDidUpdate`. В общем, после нескольких митингов и обсуждений, решили сойтись на том, что использование функциональных компонентов будет предпочтительней.

* Также, в ходе разработки вставал вопрос о целесообразности использования Redux для управления состоянием приложения, и так как предполагалось, что в образовательной системе будет достаточно много информации, использующейся в нескольких компонентах + в случаях, когда количество компонентов с логикой достаточно обширное, не лишним будет отдельный слой для бизнес-логики. Итоговое решение было принято в пользу Redux. Однако и здесь возникали некоторые недопонимания, особенно вокруг того, что именно включать в глобальное состояние. Так как я был на тот момент еще слишком неопытен, я не принимал особого участия в этом обсуждении, но был в состоянии заметить, что принятое в итоге решение было не совсем оптимальным по той причине, что в глобальное состояние также записывались данные из форм, что довольно сильно захламляло глобальное состояние. 

* Вопрос касательно стилей изначально не стоял остро, так как дизайн конечного приложения спокойно реализовывался средствами, которые предлагали библиотеки Reactstrap и React-bootstrap. Однако позже, спустя несколько месяцев, в виду возникшей потребности редизайна пришлось думать над тем, что использовать для стилизации компонентов. Среди альтернатив были SASS/SCSS и CSS-in-JS: проверив и то, и другое, я высказал свое мнение в сторону SASS + CSS Modules (запускаемые через Webpack), и мое предложение поддержали. Что касается CSS-in-JS, мне не очень понравилась идея написания стилей с помощью JS, поскольку на мой взгляд данный подход нарушал принцип разделения ответственности и в целом казался мне менее удобным.

* Возникали и вопросы относительно валидации - где ее проводить и какими средствами. В первую очередь, валидация была реализована на стороне сервера (что естественно), и некоторое время потребности в клиентской валидации не было. Но когда задача реализации валидации на клиенте все же встала, появился и вопрос, какие инструменты использовать: сначала со стороны коллег была попытка реализации с помощью HTML5 Validation API, но эта тема быстро свернулась, поскольку стандартные средства не предоставляли необходимой гибкости. Первое, что пришло мне в голову, когда я взялся за эту задачу, был Formik - модуль для работы с формами в React, однако, после тщетных усилий внедрения Formik, я пришел к выводу, что наша реализация форм с хранением в Redux не позволяет нормально подключить формик, не дублируя при этом состояние каждого элемента ввода. В итоге валидацию пришлось описывать вручную с использованием библиотеки Yup и контекста React.

* Последним, наверное, спорным моментом на моей памяти был выбор инструмента для реализации сайд-эффектов. На тот момент я уже имел представление о Redux-Thunk и считал, что думать особо нечего, однако коллега посчитал иначе и предложил использование Redux-Saga. Сначала я не слишком оценил данную идею, поскольку не видел заметных преимуществ данного инструмента, но когда дело дошло до группировки экшенов, последовательного выполнения нескольких действий и, самое главное, тестирования, я понял, что сага во многом переигрывает простые "санки", предоставляя куда более удобный API.

#### Что касается крупных многостраничных сайтов:
* Такие сайты редко реализуются с использованием нативного JavaScript, зачастую используются сторонние фреймворки и библиотеки (те же Jquery, React, Vue, Ext, Polymer), поскольку тратить время на создание соственных библиотек компонентов, ютилити-функций и т.д. как правило нецелесообразно. Однако это не мешает расширять сторонний функционал собствеными API.
* Такие сайты редко оформляются с применением только чистого CSS, зачастую используются и пре- и постпроцессоры, а также CSS-фреймворки (Materialize CSS, Bootstrap) по той же причине экономии времени.
* При разработке таких сайтов обязательно применяются технологии, позволяющие адаптировать пользовательский интерфейс под основные устройства - речь идет как об адаптивности, так и о поддержке старых версий браузеров с помощью полифилов, шимов.
* Для таких сайтов особенно важна стабильность и надежность серверов. Поэтому сервера (если они в ведении администрации сайта) масштабируются как вертикально (для выдерживания большего числа запросов), так и горизонтально (с целью децентрализации). На стороне клиентского приложение число обращений к серверу сводится к минимуму, преобладают "толстые" клиенты.
* Функционал таких сайтов подлежит тестированию, поскольку тесты как модульные, так и интеграционные помогают если не полностью предотвратить появление багов в продакшн-коде, то как минимум ускоряют их поиск и отладку.
* Разработка таких сайтов не ведется "сполошняком" - веб-страницы не верстаются целиком, вместо этого используются либо компоненты, либо шаблоны с целью достижения большей переиспользуемости кода.
* Многие рутинные этапы в разработке крупных сайтов автоматизированны. Например, с помощью Webpack автоматизируются процессы сжатия, транспиляции, префиксирования и т.д.
* Крупные сайты зачастую зависят от сторонних сервисов, например, Google Maps.
* В крупных многостраничных сайтах должны быть реализованы меры по обеспечению безопасности: защита от CSRF и XSS, правильно оформлены запросы к серверу, адекватно храниться конфиденциальные данные.

## 3. Presentational Components vs Container Components.
__Presentational Components__, они же __Dumb Components__ - компоненты, не выполняющие никакой логики, а только принимающие на вход параметры и, в зависимости от значений этих параметров, выводящие определенную верстку.
__Container Components__ или __Stateful Components__ - реализуют определенную бизнес-логику, хранят информацию о своем состоянии и, если необходимо, передают эту информацию вниз по дереву компонентов в случаях, если рендер дочерних компонентов зависит от состояния родителя.

#### Преимущества:
  * Переиспользуемость той логики, что содержат в себе компоненты-контейнеры и, как следствие, отсутствие необходимости дублировать код в дочерних компонентах
  * Наглядное разделение слоя логики и слоя с графическим интерфейсом
  * Более удобное тестирование

#### Недостатки:
  * Увеличение числа компонентов
  * _Prop-Drilling_ - необходимость передачи пропов вглубь дерева компонентов при отсутствии у компонентов-посредников потребности в них
  * Более частые ререндеры ввиду того, что контейнеры также хранят состояние и дочерних компонентов.

## 4. Наследование в JavaScript.
Наследование в JS устроено несколько иначе, если сравнивать с традиционными объектно-ориентированными языками.
Дело в том, что в JavaScript для создания объектов не требуется описывать класс, объекты создаются аналогично тому, как в других языках создаются словари/хэш-таблицы за тем исключением, что ключ объектах JS обязательно должен быть строкой. Помимо этого, JS использует менее популярную модель прототипного наследования (делегирования, если точнее, т.к. оригинальное прототипное наследование предполагает копирование свойств прототипа в новый объект). В соответствии с этой моделью объект, "наследующий" от прототипа свойства и методы, получает ссылку на прототип, а не копирует свойства родителя - таким образом, если обратиться к свойству, которого в наследованном объекте нет, объект обратится за этим свойством по ссылке к своему прототипу, в случае неудачи прототип обратится к своему прототипу и так далее до конца цепочки. По итогу вернется либо искомое значение, либо значение `undefined`, говорящее о том, что свойство неинициализированно или имеет явно присвоенное значение `undefined`

Несмотря на эту особенность поведения объектов в JavaScript, многие разработчики склоняются именно к традиционной модели классового наследования, именно по этой причине еще до выхода стандарта ES2015 существовали способы имитации классов.

```javascript

  // Простейший способ имитации классового наследования путем прямого копирования свойств и методов родителя
  function Human(age, height, weight) {
    this.age = age;
    this.height = height;
    this.weight = weight;

    this.say = function(phrase) {
      console.log(phrase);
    };
  }

  function HumanMale(age, height, weight, name) {
    Human.call(this, age, height, weight); 
    this.name = name;
  }

  // Прототипное наследование
  function Human(age, height, weight) {
    this.age = age;
    this.height = height;
    this.weight = weight;

    this.say = function(phrase) {
      console.log(phrase);
    };
  }

  let human = new Human(20, 170, 60);

  function HumanMale(name) {
    this.name = name;
  }

  HumanMale.prototype = human;
  // или просто Object.create(human, {...});
  // или Object.setPrototypeOf(humanmale, human);

  // Реализация наследования в ES2015
  class Human {
    constructor(age, height, weight) {
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    say(phrase) { console.log(phrase); }
  }

  class MaleHuman extends Human {
    constructor(age, height, weight, name) {
      super(age, height, weight);
      this.name = name;
    }
  }

```
## 5. Тестирование.
Опыта в end-to-end тестировании я не имею, однако слышал про такие фреймворки, как `cypress` и `puppeteer`.
Что касается опыта модульного тестирования, то в рабочих проектах мне не доводилось писать юнит-тесты, поскольку на предыдущем месте работы у нас в команде были тестировщики, которые тестировали как вручную, так и описывали модульные/интеграционные тесты, но тем не менее самостоятельно я разбирался во фреймворке `Jest` и библиотеке `@testing-library/react` и имею представление о том, что такое юнит-тесты, как и зачем они должны писаться. 

## 6. Реализация формы при отсутствии предписаний относительно динамического поведения.
Я бы в первую очередь обратился к тимлиду/ПМ-у и узнал бы насчет необходимости и целесообразности реализации динамического поведения для этой формы в данный момент.
Если необходимость действительно есть, то я бы проконсультировался с дизайнерами в команде, узнал бы их мнение касательно того, как должна вести себя форма. Также вероятно, что информация о том, как должны вести себя поля формы, есть, просто ее либо не успели занести, либо по ошибке указали не там. Если же дизайнеров в команде нет, то реализовал бы стандартное поведение на свое усмотрение, опираясь на контекст сайта и самой формы, а также ее расположение на странице.
Естественно, в случае, если ПМ/тимлид посоветовали пока не трогать динамическое поведение формы и ее полей, я занялся бы реализацией тех частей формы, реализация которых описана в требованиях.
Кроме того, если на текущий момент приоритет разработки данной формы низок, я бы скорее всего дождался следующего митинга и поднял бы этот вопрос на нем (в зависимости от периодичности митингов).

## 7. Полезные инструменты.
* `Emmet` - расширение для текстовых редакторов, позволяющее ускорить верстку
* `ESLint`
* Статический анализатор TypeScript - работать с TS намного приятнее благодаря статическому анализу кода, интерфейсам и прочим прелестям строго типизированных языков
* Code Snippets - расширение для VSCode включающее в себя бойлерплейт-код для популярных библиотек
* Chrome devtools
* Redux devtools
* caniuse.com

## 8. Ресурсы для профессионального развития и интересы за пределами работы.
В значительной части я черпаю знания из книг, чаще всего англоязычных (переведенные версии не так актуальны, поскольку выходят с задержкой, а переводчиков "Питера" считаю некомпетентными).
Из особо запомнившейся литературы по JS:
  * Илья Кантор. Современный учебник JavaScript
  * Серия книг _"You Don't Know JS"_ Кайла Симпсона
  * _JavaScript for Web-Developers_ Мэтта Фрисби
  * _Pro React_ Адама Фримена

Из прочей литературы:
  * _CSS in Depth_ Кейта Гранта
  * _Object Oriented Thought Process_ Мэтта Вайсфельда
  * _Database Systems: The Complete Book_ Гектора Гарсиа-Молина и Джеффри Ульмана

Временами просматриваю видео на зарубежных IT-каналах:
  * Traversy Media
  * Free Code Camp
  * Dev Ed
  * Joshua Fluke

Иногда обращаюсь к статьям и блогам:
  * Medium.com
  * CSS-Tricks.com
  * Блог Дэна Абрамова

## 9. О себе.