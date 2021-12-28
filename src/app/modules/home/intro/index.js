import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { HeaderTitle } from '../../shared/header-title'

const HomeIntroduction = () => {
  return (
    <section className="home-intro px-100">
      <Container>
        <HeaderTitle title="Giới thiệu" path="/introduction" />
        <p className="home-intro-text">
          Mriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui
          faciteorum claritatem. Investigtiones demonstraverunt lectores legere me lius quod ii legunt saepius.Claritas est etiam processus dynamicus,
          qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putam
        </p>
        <div className="text-center">
          <Link to="/introduction" className="btn btn-primary btn-wine">Xem thêm</Link>
        </div>
      </Container>
    </section>
  )
}

export default HomeIntroduction;
