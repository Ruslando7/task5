<?php if (!Yii::$app->user->isGuest):?>

<div class="row">
    <div class="col-md-3" style="font-size: 18px;">
        <p style="margin: 0">Ваш никнэйм: <span id="name" style="font-size: 22px; font-weight: 700;"><?=Yii::$app->user->identity->username?></span></p>
        <p>Ваш уровень: <span id="level" style="font-size: 22px; font-weight: 500;"><?=Yii::$app->user->identity->level?></span></p>
        <a href="<?=\yii\helpers\Url::to(['/'])?>" class="btn btn-success">Перезапустить</a>
    </div>
    <div class="col-md-9">
        <table id="#table">
            <?php for ($i = 1; $i <= 9; $i++) {
                if ($i == 1) {
                    echo "<tr>";
                }
                echo '<td><button class="check" data-id='.$i.' style="width: 150px; height: 150px; font-size: 100px;" id ="'. $i. '" ></button></td>';
                if ($i % 3 == 0) {
                    if ($i == 9) {
                        echo "</tr>";
                    } else {
                        echo "</tr><tr>";
                    }
                }
            }?>
        </table>
    </div>

</div>


<?php else:?>
<?php Yii::$app->getResponse()->redirect('/login');?>
<?php endif;?>

