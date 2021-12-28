import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { HeaderTitleMedium } from '../shared/header-title';
import CardWine from '../shared/card/CardWine';
import Loading from '../loading/Loading';

import { withFirebase } from '../firebase';

const BlogPage = () => {
  return (
    <Container>
      <section>
        <HeaderTitleMedium title="Blog" />
        <Row>
          <Blog />
        </Row>
      </section>
    </Container>
  )
}

const BlogHookBase = ({ firebase }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    firebase
      .blogs()
      .limitToLast(9)
      .orderByChild('createdAt')
      .once('value')
      .then(snapshot => {
        const blogObject = snapshot.val();
        if (blogObject) {
          const blogList = Object.keys(blogObject).map(key => ({
            ...blogObject[key],
            id: key
          }))
          setBlogs(blogList);
          setLoading(false);
        } else {
          setBlogs(null);
          setLoading(false);
        }
      })
      .catch(() => {
        setError(true);
      })
  }, [firebase]);

  const renderError = () => <div>{t('NOTIFY.SOMETHING_WENT_WRONG')}</div>

  return (
    <>
      {loading && <Loading />}
      {error && renderError()}
      {blogs ? <BlogList blogs={blogs} /> : null}
    </>
  )
}

const BlogList = ({ blogs }) => (
  <>
    {blogs.map(blog => (
      <CardWine key={blog.id} item={blog} md={4} path={`/blog/${blog.id}`} />
    ))}
  </>
)

const Blog = withFirebase(BlogHookBase)

export default BlogPage;
