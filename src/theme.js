    import { createTheme } from '@mui/material/styles';

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFFFFF', // синий (основной)
                light: '#3B82F6', // Светлый синий (для hover-эффектов)
                dark: '#0F172A', // Темно-синий (для заголовков, акцентов)
            },
            secondary: {
                main: '#848482', // Светлый серый (фон, нейтральные элементы)
                dark: '#6B7280', // Темно-серый (для текста и контуров)
            },
            accent: {
                main: '#ff5722', // Оранжевый
                light: '#F87171', // Светло-красный (hover, эффекты)
                orange: '#F97316', // Альтернативный акцент (оранжевый)
            },
            background: {
                default: '#FFFFFF', // Чистый белый фон
                paper: '#F9FAFB', // Легкий оттенок для карточек и секций
            },
            text: {
                primary: '#1F2937', // Темно-серый (основной текст)
                secondary: '#6B7280', // Светло-серый (вторичный текст)
                contrast: '#FFFFFF', // Контрастный белый (на темном фоне)
            },
            success: {
                main: '#22C55E', // Зеленый (опционально, если нужен)
            },
            warning: {
                main: '#EAB308', // Желтый (опционально)
            },
            error: {
                main: '#DC2626', // Темно-красный (ошибки, важные элементы)
            },
        },
        typography: {
            fontFamily: `'Montserrat', sans-serif`
        }
    });

    export default theme;