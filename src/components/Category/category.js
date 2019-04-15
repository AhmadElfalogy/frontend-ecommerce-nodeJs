import React ,{Component} from 'react';

const Category = (props)=>{
    return(
        <>
            <section class="filters">
            {/* <!-- search box --> */}
            <div class="search-box">
                <input class="search-box__input" placeholder="Search..." type="text" name="txt_search" id=""/>
                <button type="submit" class="search-box__btn">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            
            {/* <!-- filter list --> */}
            <div>
                {/* <!-- filter header --> */}
                <h5>Categories</h5>
                {/* <!-- filter list --> */}
                <ul class="list list--vr-separator">
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Arts & Crafts</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Automotive</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Baby</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Books</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Eletronics</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Women's Fashion</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Men's Fashion</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Health & Household</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Home & Kitchen</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Military Accessories</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Movies & Television</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Sports & Outdoors</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Tools & Home Improvement</li>
                    <li class="link list__item"><i class="link__icon fas fa-angle-right"></i>Toys & Games</li>
                </ul>
            </div>
            {/* <!-- filter tags --> */}
            <div>
                {/* <!-- filter header --> */}
                <h5></h5>
                {/* <!-- filter tags --> */}
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <!-- related items --> */}
            <div>
                {/* <!-- title --> */}
                <h5></h5>
                {/* <!-- small item --> */}
                <div></div>
                <div></div>
                <div></div>
            </div>
            
           </section>
        </>
    )
}
export default Category;