# Домашнє завдання: Додавання AsyncStorage та стилізація вкладок

## Мета завдання
Доопрацювати існуючий проект з нотатками, додавши **локальне збереження даних через AsyncStorage** та **стилізувати навігаційні вкладки** за допомогою кольорів з кастомного хука `useTheme`.

---

## Вимоги до проекту

### 1. Додавання AsyncStorage для збереження нотаток

Ваше завдання - **замінити роботу з фейковим API** (JSONPlaceholder) на **локальне збереження даних** в пам'яті телефону за допомогою AsyncStorage.

#### Що потрібно зробити:

**У файлі `app/(tabs)/index.tsx`:**

1. **Імпортувати AsyncStorage:**
   ```tsx
   import AsyncStorage from "@react-native-async-storage/async-storage";
   ```

2. **Змінити завантаження даних при старті:**
   - Видалити `fetch` запит до JSONPlaceholder
   - Додати функцію `loadNotes`, яка зчитує дані з AsyncStorage за ключем `"notes"`
   - Використати `JSON.parse()` для перетворення рядка назад у масив об'єктів
   - Викликати цю функцію в `useEffect` при монтуванні компонента

3. **Оновити функцію додавання нотатки (`addNote`):**
   - Після оновлення стану `setNotes(updatedNotes)`
   - Зберегти оновлений масив в AsyncStorage: `AsyncStorage.setItem("notes", JSON.stringify(updatedNotes))`
   - Обгорнути код в `try/catch` для обробки помилок

4. **Оновити функцію видалення нотатки (`deleteNote`):**
   - Після фільтрації масиву та оновлення стану
   - Зберегти новий масив в AsyncStorage
   - Обгорнути код в `try/catch` для обробки помилок

#### Технічні вимоги:
- Використовуйте ключ `"notes"` для збереження в AsyncStorage
- Завжди використовуйте `JSON.stringify()` перед збереженням
- Завжди використовуйте `JSON.parse()` при зчитуванні
- Додайте обробку помилок через `try/catch` блоки
- Додайте `console.error()` для виведення помилок в консоль

---

### 2. Стилізація вкладок за допомогою useTheme

Ваше завдання - **інтегрувати кольори з хука `useTheme`** в навігаційні вкладки, щоб вони автоматично змінювалися при перемиканні теми.

#### Що потрібно зробити:

**У файлі `app/(tabs)/_layout.tsx`:**

1. **Імпортувати хук useTheme:**
   ```tsx
   import useTheme from "@/hooks/useTheme";
   ```

2. **Отримати кольори з хука:**
   ```tsx
   const { colors } = useTheme();
   ```

3. **Замінити статичні кольори на динамічні:**
   - Замість `backgroundColor: "black"` використати `backgroundColor: colors.surface`
   - Замість `tabBarActiveTintColor: "red"` використати `tabBarActiveTintColor: colors.primary`
   - Замість `tabBarInactiveTintColor: "green"` використати `tabBarInactiveTintColor: colors.text`
   - Замість `borderTopColor: "red"` використати `borderTopColor: colors.primary`
   - Для `tabBarLabelStyle.color` використати `colors.text`

#### Технічні вимоги:
- Використовуйте кольори з об'єкта `colors`, отриманого з хука `useTheme`
- Панель вкладок має автоматично змінювати кольори при перемиканні теми
- Збережіть всі інші стилі (висота, відступи, розміри шрифтів)

---

## Приклади коду

### Приклад 1: Завантаження нотаток з AsyncStorage

```tsx
useEffect(() => {
  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem("notes");
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error("Failed to load notes from storage", error);
    }
  };

  loadNotes();
}, []);
```

### Приклад 2: Збереження нотатки в AsyncStorage

```tsx
const addNote = async () => {
  if (!text.trim()) return;

  const newNote: Note = {
    userId: 1,
    id: Date.now(),
    title: text.trim(),
    completed: false,
  };

  try {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setText("");
    await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
  } catch (error) {
    console.error("Failed to save note to storage", error);
  }
};
```

### Приклад 3: Видалення нотатки з AsyncStorage

```tsx
const deleteNote = async (id: number) => {
  try {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
  } catch (error) {
    console.error("Failed to delete note from storage", error);
  }
};
```

### Приклад 4: Використання useTheme у _layout.tsx

```tsx
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 4,
          borderTopColor: colors.primary,
          height: 90,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: "bold",
          color: colors.text,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Notes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

---

## Критерії оцінювання

| Критерій | Бали |
|----------|------|
| Правильна реалізація завантаження нотаток з AsyncStorage | 25 |
| Збереження нових нотаток в AsyncStorage | 25 |
| Видалення нотаток з оновленням AsyncStorage | 20 |
| Інтеграція useTheme в _layout.tsx для стилізації вкладок | 20 |
| Обробка помилок (try/catch) та якість коду | 10 |
| **Всього** | **100** |

---

## Підказки

1. **AsyncStorage:**
   - Не забувайте про `async/await` при роботі з AsyncStorage
   - Завжди використовуйте `JSON.stringify()` перед збереженням
   - Перевіряйте чи дані існують (`if (storedNotes)`) перед `JSON.parse()`
   - AsyncStorage може зберігати лише рядки, тому потрібна конвертація

2. **useTheme:**
   - Хук вже створений і підключений до проекту
   - Просто імпортуйте його та використовуйте деструктуризацію: `const { colors } = useTheme()`
   - Кольори автоматично оновляться при зміні теми

3. **Тестування:**
   - Після реалізації перезапустіть додаток - нотатки мають зберегтися
   - Спробуйте перемкнути тему на екрані Settings - вкладки мають змінити кольори
   - Додайте кілька нотаток, закрийте додаток, відкрийте знову - нотатки мають залишитися

4. **Поширені помилки:**
   - Забування `await` перед `AsyncStorage.setItem()` або `AsyncStorage.getItem()`
   - Забування `JSON.stringify()` при збереженні
   - Забування `JSON.parse()` при зчитуванні
   - Відсутність обробки помилок (`try/catch`)

---

## Структура файлів для редагування

Вам потрібно відредагувати **лише 2 файли**:

```
app/
└── (tabs)/
    ├── _layout.tsx      # Додати useTheme для стилізації вкладок
    └── index.tsx        # Додати AsyncStorage для нотаток
```

Всі інші файли (`hooks/useTheme.tsx`, `app/_layout.tsx`, `app/(tabs)/settings.tsx`) вже готові і не потребують змін.

---

## Терміни здачі

**Дедлайн:** [Вкажіть дату]

**Формат здачі:**
- Посилання на GitHub репозиторій з вашим проектом
- Або ZIP-архів з кодом проекту
- Додайте короткий опис змін у README.md

---

## Додаткові завдання (бонусні бали)

Якщо ви хочете отримати додаткові бали, реалізуйте:

- **+5 балів:** Додайте можливість редагування існуючих нотаток (при натисканні на нотатку)
- **+5 балів:** Додайте підтвердження перед видаленням нотатки (Alert)
- **+10 балів:** Додайте можливість позначати нотатки як "важливі" з окремою іконкою
- **+10 балів:** Додайте сортування нотаток (за датою створення, за алфавітом)
- **+15 балів:** Додайте анімації при додаванні/видаленні нотаток

---

**Успіхів у виконанні завдання! 🚀**
