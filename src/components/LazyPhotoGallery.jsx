import { Card } from 'react-bootstrap';

const LazyPhotoGallery = () => {
  return (
    <Card className="border-0 shadow-sm overflow-hidden card-hover">
      <Card.Body className="p-0">
        <div className="lr_embed" style={{ position: 'relative', paddingBottom: '50%', height: 0, overflow: 'hidden' }}>
          <iframe 
            id="iframe" 
            src="https://lightroom.adobe.com/embed/shares/d0493ba5f29249da8da7cde34ac2712f/slideshow?background_color=%232D2D2D&color=%23999999&autoplay=1&loop=1&order=random" 
            frameBorder="0"
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            title="HMD Ultimate Photo Gallery"
            loading="lazy"
          ></iframe>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LazyPhotoGallery;