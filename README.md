このページは、以下のサイトを参考に、ionic4アプリ作成の練習を行っているものです。

@s_kozake
2018年08月03日に更新
Ionic 4とFirebaseでチャットアプリ
https://qiita.com/s_kozake/items/6c7a0cec75c957606a33

src/environments/environment.ts を作成して頂き、ご自身のfirebaseのAPIキーその他をコピペしてください。

```javascript:environment.ts
// <>となっている部分は、自分のapiKeyを入力
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

## インストール方法


`git clone https://github.com/adash333/ionic4-firebase-chat2.git`

Create a new file "src/environments/environment.ts"

Run `npm install` to install all dependencies.

Run `ionic serve` to start the development environment.


作成経過は以下に記載しています。

http://twosquirrel.mints.ne.jp/?p=28125


## 開発環境

```
Windows 8.1 Pro
git version 2.17.1.windows.2
Sourcetree Version 2.6.9.0
VisualStudioCode 1.27.2

Node v8.12.0
npm 6.4.1
Ionic (Ionic CLI) 4.1.2
Ionic Framework @ionic/angular 4.0.0-beta.7

firebase-tools@4.2.1
firebase@5.5.1
```


作成中です。
