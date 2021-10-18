/**
 * includes/Layout/main.js
 */
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from './Header';
import Footer from './Footer';
import Head from './Head';

const LayoutMain = ({ children, className }) => (
  <>
    <Head />
    <div className={classNames('root', className)}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

LayoutMain.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default LayoutMain;
