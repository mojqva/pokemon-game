import cn from 'classnames';

import s from './style.module.css';


const Layout = ({title, urlBg, colorBg, children}) => {
    if (!title) return null;
    return (
        <section className = {s.root} style = {{background: urlBg ? `url(${urlBg})` : colorBg}}>
            <div className = {s.wrapper}>
                <article>
                    <div className = {s.title}>
                        <h3> {title}</h3>
                        <span className = {s.separator}></span>
                    </div>
                    <div className = {cn(s.desc, s.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;