<h2>Топ 10 игроков:</h2>
<table class="table table-hover table-bordered">
    <thead>
        <tr>
            <th scope="col">№</th>
            <th scope="col">Имя пользователя</th>
            <th scope="col">Уровень</th>
        </tr>
    </thead>
    <tbody>
    <?php $i = 1; foreach($users as $user):?>
    <tr>
        <td scope="row"><?=$i?></td>
        <td><?=$user['username']?></td>
        <td><?=$user['level']?></td>
    </tr>
    <?php $i++; endforeach;?>
    </tbody>
</table>
