import { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import GhostContentAPI from '@tryghost/content-api';

// Initialize the Ghost API client with the provided values
const api = new GhostContentAPI({
  url: 'https://hmd-ultimate-announcements.ghost.io',
  key: '23e9ad1441019fd9dd3596d0d0',
  version: 'v5.0'
});

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch posts from the Ghost Content API
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await api.posts
          .browse({
            limit: 3,
            include: ['tags', 'authors'],
            fields: ['title', 'slug', 'feature_image', 'html', 'published_at', 'reading_time']
          });
        
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load announcements. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Simple date formatter that just extracts the year correctly
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    
    // Format using Intl.DateTimeFormat but override the year part
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric'
    });
    
    const formattedDate = formatter.format(date);
    return `${formattedDate}, ${year}`;
  };

  if (loading) {
    return (
      <section className="py-5" id="blog">
        <Container>
          <h2 className="mb-4 text-center">Latest Announcements</h2>
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-5" id="blog">
        <Container>
          <h2 className="mb-4 text-center">Latest Announcements</h2>
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-5" id="blog">
      <Container>
        <h2 className="mb-4 text-center">Latest Announcements</h2>
        
        {posts.length > 0 ? (
          <div className="mb-4">
            {posts.map(post => (
              <Card key={post.id} className="mb-4 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex flex-column flex-md-row">
                    {post.feature_image && (
                      <div className="flex-shrink-0 mb-3 mb-md-0 me-md-4" style={{ maxWidth: '250px' }}>
                        <img 
                          src={post.feature_image} 
                          alt={`Featured image for ${post.title}`}
                          className="img-fluid rounded"
                        />
                      </div>
                    )}
                    <div className="flex-grow-1">
                      <h3 className="h4 mb-3">{post.title}</h3>
                      <div 
                        className="text-secondary" 
                        dangerouslySetInnerHTML={{ __html: post.html }}
                      />
                      <div className="mt-3 text-muted">
                        <small>
                          {formatDate(post.published_at)}
                        </small>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-4">
            <p>No announcements found. Check back soon for updates!</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default BlogSection;