import { Card } from 'react-bootstrap';

const LazyCalendar = () => {
  return (
    <Card className="border-0 shadow-sm overflow-hidden card-hover">
      <iframe 
        src="https://calendar.google.com/calendar/embed?src=52cf4449b82472898267e25a47a4926021bee7192d9f4a1d85e0cfdd826e5290%40group.calendar.google.com&ctz=America%2FNew_York" 
        className="w-100"
        style={{ height: "500px" }}
        frameBorder="0" 
        scrolling="no"
        title="HMD Ultimate events calendar"
        loading="lazy"
      ></iframe>
    </Card>
  );
};

export default LazyCalendar;