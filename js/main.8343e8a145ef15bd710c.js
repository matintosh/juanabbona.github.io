(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{e6Wu:function(e,n,i){"use strict";i.r(n);i("SYky"),i("EFQ4"),i("nH3I"),i("hZTp");var a=i("EVdn"),s=i.n(a);const o=[{name:"React & React Native",icon:"devicon-react-original",expertise:100},{name:"AngularJS",icon:"devicon-angularjs-plain",expertise:25},{name:"Django",icon:"devicon-django-plain",expertise:75},{name:"Python",icon:"devicon-python-plain",expertise:75},{name:"Sass",icon:"devicon-sass-original",expertise:75},{name:"Less",icon:"devicon-less-plain-wordmark",expertise:75},{name:"Docker",icon:"devicon-docker-plain",expertise:25},{name:"Amazon Web Services",icon:"devicon-amazonwebservices-original",expertise:25},{name:"GIT",icon:"devicon-git-plain",expertise:75}];s()(document).ready(()=>{o.forEach((e,n)=>{s()("#skills-container").append("spacer"===e.name?'\n            <div class="col-md-6"></div>\n        ':`\n            <div class="col-md-6">\n                <div class="skill ${n%2==0?"pr-4":"pl-4"}">\n                    <i class="${e.icon}"></i>\n                    <div class="details">\n                        <span>${e.name}<span class="float-right">${e.expertise}%</span></span>\n                        <div class="progress">\n                            <div class="progress-bar bg-secondary" role="progressbar" style="width: ${e.expertise}%"\n                                aria-valuenow="${e.expertise}" aria-valuemin="0" aria-valuemax="100"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `)}),s()('[data-toggle="tooltip"]').tooltip(),setTimeout((function(){s()(".loader").hide()}),250)})},hZTp:function(e,n,i){}},[["e6Wu",1,2]]]);