import React from 'react'
import Grid from './grid'
import Flex from './flex'
import Box from './box'
import styled from '@emotion/styled'
import { css } from '@emotion/core'


const TextContent = styled((props) => {
  return (
    <Flex {...props} flexDirection='column' align-items='center'>
      <Box fontSize="3rem"> תקציר</Box>
      <Box as='p'>אי שם באיים הקאריביים חי לו ברנשצבע
        להיות פיראט אימתני בנפשו לו אבה
        חשב הוא לעצמו כמה כבר קשה יכול להיות
        להביס שודדים בכמה ירידות קלות
        אך כשפיראט הרפאים המרושע לה צ'אק
        באהובתו אילנה המתוקה חשק
        שינס מותניו כפיסדבק לעצור האיוולת
        לחיקו ישיב בכל מחיר את המושלת
        קבוצת הרפתקה עברית בלי אומר ודברים
        מביאה לכם את המשחק המופלא בצבעים
        שבו שחקו לבד או עם הילדים
        ואל תשכחו לתת להם קצת עידודים... (שיר עם קדום)
      </Box>
    </Flex>)
})``

export default TextContent;