// Данные расписания
const scheduleData = {
    шт: {
        1: [
            { time: "8:00 - 9:30", subject: "Математика", teacher: "Иванов И.И.", room: "101" },
            { time: "9:45 - 11:15", subject: "Программирование", teacher: "Петров П.П.", room: "102" }
        ],
        2: [
            { time: "8:00 - 9:30", subject: "Физика", teacher: "Сидоров С.С.", room: "103" },
            { time: "9:45 - 11:15", subject: "История", teacher: "Григорьев Г.Г.", room: "104" }
        ]
    },
    ет: {
        1: [
            { time: "8:00 - 9:30", subject: "Химия", teacher: "Евдокимова Е.А.", room: "201" },
            { time: "9:45 - 11:15", subject: "Биология", teacher: "Иванова И.И.", room: "202" }
        ]
    },
    // Добавьте другие группы и курсы по аналогии
};

// Функция для отображения расписания
function updateSchedule() {
    const group = document.getElementById("group-select").value;
    const course = document.getElementById("course-select").value;

    // Получаем расписание для выбранной группы и курса
    const schedule = scheduleData[group] && scheduleData[group][course];

    const scheduleContent = document.getElementById("schedule-content");
    scheduleContent.innerHTML = ''; // Очищаем старое расписание

    if (schedule && schedule.length > 0) {
        schedule.forEach(item => {
            const scheduleItem = document.createElement("div");
            scheduleItem.classList.add("schedule-item");

            scheduleItem.innerHTML = `
                <h3>${item.subject}</h3>
                <p><strong>Время:</strong> ${item.time}</p>
                <p class="room"><strong>Кабинет:</strong> ${item.room}</p>
                <p class="teacher"><strong>Преподаватель:</strong> ${item.teacher}</p>
            `;
            scheduleContent.appendChild(scheduleItem);
        });
    } else {
        scheduleContent.innerHTML = "<p>Расписание не найдено.</p>";
    }
}

// Обработчик изменений в выпадающих списках
document.getElementById("group-select").addEventListener("change", updateSchedule);
document.getElementById("course-select").addEventListener("change", updateSchedule);

// Инициализация расписания
updateSchedule();
