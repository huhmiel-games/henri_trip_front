export function OpeningHour(props: any)
{
    const { openingHour } = props

    const start = openingHour.start
    const end = openingHour.end 

    const isClosed = start == end || end < start

    if (isClosed){
        return (
            <p>{openingHour.day}: Closed </p>
        )
    }
    
    return(
        <>
            <p>{openingHour.day}: open At:{start}h close At: {end}h </p>
        </>
    )
}