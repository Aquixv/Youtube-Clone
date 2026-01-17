export const Value_Converter = (value) => {
if(value >= 1000000)
{
    return Math.floor(value/1000000) +'M views'
}
else if(value>=1000)
    {
    return Math.floor(value/1000) +'k views'
}
else (value < 1000)
    {
    return value + ' views'
}
}
export const like_Converter = (value) => {
if(value >= 1000000)
{
    return Math.floor(value/1000000) +'M'
}
else if(value>=1000)
    {
    return Math.floor(value/1000) +'k'
}
else (value < 1000)
    {
    return value + ''
}
}
export const comm_Converter = (value) => {
if(value >= 1000000)
{
    return Math.floor(value/1000000) +' Comments'
}
else if(value>=1000)
    {
    return Math.floor(value/1000) +' Comments'
}
else (value < 1000)
    {
    return value + ' Comments'
}
}
export const subs_Converter = (value) => {
if(value >= 1000000)
{
    return Math.floor(value/1000000) +'M Subscribers'
}
else if(value>=1000)
    {
    return Math.floor(value/1000) +'K Subscribers'
}
else (value < 1000)
    {
    return value + ' Subscribers'
}
}