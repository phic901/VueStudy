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