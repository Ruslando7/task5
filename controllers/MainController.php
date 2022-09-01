<?php


namespace app\controllers;

use app\models\User;
use app\models\Users;
use Yii;
use yii\web\Controller;

class MainController extends Controller
{
    public function actionIndex() {

        if (Yii::$app->request->get('name')) {
            $name = Yii::$app->request->get('name');
            $user = Users::find()->where(['username' => $name])->one();
            $user->level = $user->level + 1;
            if ($user->level > 99) {
                $user->level = 99;
            }
            $user->save();
        }

        if (Yii::$app->request->get('username')) {
            $username = Yii::$app->request->get('username');
            $user = Users::find()->where(['username' => $username])->one();
            $user->level = $user->level - 1;
            if ($user->level < 1) {
                $user->level = 1;
            }
            $user->save();
        }

        $this->view->title = 'Крестики-нолики';
        return $this->render('index');
    }


    public function actionStats() {
        $users = Users::find()->orderBy("level DESC")->limit(10)->all();
        $this->view->title = 'Статистика';
        return $this->render('stats', compact('users'));
    }


}