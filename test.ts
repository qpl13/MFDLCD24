LCD24.LCD_Init()
LCD24.LCD_SetBL(10)
LCD24.LCD_Filling(LCD_COLOR.RED)
LCD24.DrawLine(
1,
1,
160,
1,
LCD24.Get_Color(LCD_COLOR.BLUE),
DOT_PIXEL.DOT_PIXEL_2,
LINE_STYLE.LINE_SOLID
)