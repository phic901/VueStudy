# new-cli-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```



파람스라는 객체 안에 값을 통해서 보낼수 있지만 
'users/:userId' 라는 것처럼 을 통해서도 받을수 있다.


<v-list-tile router :to="{
  name: 'users',
  params : {
      userId:4321,
      name :'hoza'
    },
  query:{
    group:'member',
    category : 'trial'
  }
  }" 
  exact

<h1>Users</h1>
<p>이 유저는 현재 유저 번호가 {{ userId }} 입니다.</p>
<h1>그룹 : {{$route.query.group}}</h1>        
<h1>카테고리 : {{$route.query.category}}</h1>
<h1>이름 : {{$route.query.name}}</h1>
<h1>주소 : {{$route.query.address}}</h1>

============================================================
라우터 가드

#router.js 에 있는 컴포넌트에 설정방식
beforeEnter : 라우터가 실행되기전 먼저 실행됨 / express next() 개념이랑 비슷한듯..
  beforeEnter : (to, from, next) => {
    console.log(to, from);
    next();
  },

컴포넌트 안에서 생성방식
    beforeRouteEnter(to, from, next){
        console.log('before enter');
        next();
    },

==================================================================
# 라이프 사이클
<script>
export default {
    data(){
        return{
            userId : null
        }
    },
    beforeRouteEnter(to, from, next){
        console.log('before enter');
        next();
    },
    beforeRouteLeave(to, from ,next){
        console.log('before leave');
        next();
    },
    created(){
        console.log('created');
    },
    destoryed(){
        console.log('destory');
    }
}
</script>

==================================================================
# VUE ROUTER | Redirection | VueJS 3 & Vuex | 기초배우기
{
  path:'/redirect-me',
  //redirect:'/users'
  redirect:{name : 'users'}
}
localhost:8080/redirect-me 로 들어가면 /users 로 리다이렉트 시킴


# 등록되지 않은 모든 url 에대해서 home으로 리다이렉트 시킴
{
  path : '/*',
  redirect:{name : 'home'}
}
