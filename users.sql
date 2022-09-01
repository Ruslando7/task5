-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 01 2022 г., 16:48
-- Версия сервера: 5.7.33-log
-- Версия PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `game`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '1',
  `auth_key` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `level`, `auth_key`) VALUES
(4, 'rrr', 'rrr@rdsa.ru', '$2y$13$n4iNr8pJV0fjYgifLXYRueAVkmTVVa6tJw53DXCoxbvUNS506uRAq', 1, NULL),
(8, 'qqq', 'ruslan@mail.ru', '$2y$13$0LEe3A/UMwz95A/md.sBE.O3OLcsX7IhGsh03HsNB5GSoDKgocdF6', 1, NULL),
(9, 'rus', 'ruslan@mail.ru', '$2y$13$Dg89dDplAoIbEWg6P87S9eGKFq3qzwG0UptOmS7TvAPxd1F35KBL2', 91, 'ool_FidSpdWVkKWqCMpeasLrURLmSzef'),
(10, 'New', 'urr@mail.ru', '$2y$13$kSYBdKHm1BzhLzEXf8f/0.V2vFqSgWKS25jlsyzeLngUMDnXqsVXe', 1, NULL),
(11, 'tep', 'tep@mail.ru', '$2y$13$6YG9YvKSVfpRlcoQmqxhn.Ki/gOSGDcP6axpVpo8rwfCpkHIDTyc6', 1, NULL),
(12, 'ruslan', 'rus@mail.ru', '$2y$13$Nc6tIXCv7EyvjZqlyndpceeuFQ77wKiyZBrPb74ohHa9d2uZ9vWNi', 1, 'uScIxQ6BoSYo0Ri_cfLubl0UnFeqCoZL'),
(13, 'kek', '123@m.ru', '$2y$13$J9ZBFBRday1hBEZvdmVCd.URbmTFeksEu3RsQg4fmVK5jzF7QFRBy', 1, 'jrnYOTSKmHpNKsta1pRd9bTuEJvenu9I');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
