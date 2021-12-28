import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Loadable from 'react-loadable';
import { useTranslation } from 'react-i18next';
import { HeaderTitleMedium } from '../shared/header-title';
import Loading from '../loading/Loading';
import BlogDetailRight from './components/Right';
import BlogDetailContent from './components/Content';
import { withFirebase } from '../firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const BlogDetailComment = Loadable({
  loader: () => import('./components/Comment'),
  loading: Loading,
});

const BlogPage = () => {
  return (
    <Container>
      <HeaderTitleMedium title="Blog" />
      <div className="blog">
        <BlogDetailRight>
          <Blog />
          <BlogDetailComment />
        </BlogDetailRight>
      </div>
    </Container>
  )
}

const BlogHookBase = ({ firebase, match }) => {
  const blogId = match.params.id;
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    firebase
      .blog(blogId)
      .orderByChild('createdAt')
      .once('value')
      .then(snapshot => {
        const blogObject = snapshot.val();
        if (blogObject) {
          setData(blogObject);
          setLoading(false);
        } else {
          setData(null);
          setLoading(false);
        }
      })
      .catch(() => {
        setError(true);
      })
  }, [firebase, blogId]);

  const renderError = () => <div>{t('NOTIFY.SOMETHING_WENT_WRONG')}</div>

  return (
    <>
      {loading && <Loading />}
      {error && renderError()}
      {data ? <BlogDetailContent item={data} /> : null}
    </>
  )
}

const Blog = compose(
  withRouter,
  withFirebase
)(BlogHookBase);

export default BlogPage;
