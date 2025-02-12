import { exec } from "child_process";
import chokidar from "chokidar";

let serverProcess;

const startServer = () => {
	// Запускаем сервер
	serverProcess = exec("yarn run mcs", (error, stdout, stderr) => {
		if (error) {
			console.error(`Ошибка: ${error.message}`);
			return;
		}
		if (stderr) {
			console.error(`Ошибка: ${stderr}`);
			return;
		}
		console.log(`Результат: ${stdout}`);
	});

	// Выводим информацию о сервере
	serverProcess.stdout.on("data", (data) => {
		console.log(data);
	});
};

// Остановка сервера
const stopServer = () => {
	if (serverProcess) {
		serverProcess.kill(); // Останавливаем процесс
		console.log("Сервер остановлен.");
	}
};

// Настройка наблюдателя
const watcher = chokidar.watch("./server/db.json", {
	persistent: true,
});

watcher.on("change", (path) => {
	console.log(`Файл ${path} изменен. Перезапуск сервера...`);
	stopServer(); // Останавливаем старый сервер
	startServer(); // Запускаем новый сервер
});

// Запускаем сервер в первый раз
startServer();
