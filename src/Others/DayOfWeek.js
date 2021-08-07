
export default function DayOfWeek(props) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saterday'];
    return <div>{days[props.day]}</div> 
}
    