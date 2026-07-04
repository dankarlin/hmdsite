import { Card } from 'react-bootstrap';

const LazyInstagram = () => {
  return (
    <Card className="border-0 shadow-sm overflow-hidden card-hover">
      <iframe 
        src="https://www.instagram.com/horsemeatdisc/embed" 
        className="w-100"
        style={{ height: "500px" }}
        frameBorder="0" 
        scrolling="no"
        title="HMD Ultimate Instagram feed"
        loading="lazy"
      ></iframe>
    </Card>
  );
};

export default LazyInstagram;