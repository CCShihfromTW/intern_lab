# Todo List
## 功能介紹
* 頁面一 : 登入
* 頁面二 : 首頁
* 頁面三 : 任務清單
* 任務清單 (目前只有Read資料從spring串接，create、update、delete尚未串接到spring，DB從postgresql提取資料)

## 技術實作
### 前端
* reference <br>
實作位置: src\app\manage\todo\section\section.component.html

* binding(interpolation、property、event、two-way)<br>
實作位置: src\app\manage\todo\section\section.component.html

* lifecycle(有實作OnInIt)<br>
實作位置: src\app\@services\todo-api.service.ts

* 原生元件(ngIf、ng-template、ng-container、ngModel)<br>
src\app\manage\home\home.component.html
src\app\manage\todo\section\section.component.html

* pipe<br>
src\app\manage\todo\section\todo-info-model\todo-info-modal.component.html

* service<br>
實作位置: src\app\@services

* httpclient<br>
實作位置: src\app\@services\todo-api.service.ts

* intercepter<br>
src\app\@services\interceptor.service.ts

* proxy<br>
src\proxy.conf.json
angular.json

* router<br>
實作位置: src\app\app-routing.module.ts
src\app\manage\manage-routing.module.ts

* error handling
實作位置: src\app\@services\errorhandle.service.ts
src\app\login\login.component.ts

### 後端
* RestController<br>
app/controllers/TodoController.java

* Service<br>
app/services/TodoService.java

* Repository (JPA)<br>
app/repositories/TodoRepository.java

* Entity(domain)<br>
app/repositories/TodoRepository.java

* 未實作spring security

