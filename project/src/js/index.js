import 'bootstrap';
import 'css-doodle';
import 'devicon';

import '../scss/index.scss';

import $ from 'jquery';

const skills = [
    {
        name: 'React & React Native',
        icon: 'devicon-react-original',
        expertise: 100,
    },
    {
        name: 'AngularJS',
        icon: 'devicon-angularjs-plain',
        expertise: 25,
    },
    {
        name: 'Django',
        icon: 'devicon-django-plain',
        expertise: 75,
    },
    // {
    //     name: 'spacer',
    // },
    {
        name: 'Python',
        icon: 'devicon-python-plain',
        expertise: 75,
    },
    // {
    //     name: 'Java',
    //     icon: 'devicon-java-plain',
    //     expertise: 50,
    // },
    // {
    //     name: 'JavaScript',
    //     icon: 'devicon-javascript-plain',
    //     expertise: 100,
    // },
    // {
    //     name: 'TypeScript',
    //     icon: 'devicon-typescript-plain',
    //     expertise: 100,
    // },
    // {
    //     name: 'HTML',
    //     icon: 'devicon-html5-plain',
    //     expertise: 100,
    // },
    // {
    //     name: 'CSS',
    //     icon: 'devicon-css3-plain',
    //     expertise: 75,
    // },
    {
        name: 'Sass',
        icon: 'devicon-sass-original',
        expertise: 75,
    },
    {
        name: 'Less',
        icon: 'devicon-less-plain-wordmark',
        expertise: 75,
    },
    {
        name: 'Docker',
        icon: 'devicon-docker-plain',
        expertise: 25,
    },
    {
        name: 'Amazon Web Services',
        icon: 'devicon-amazonwebservices-original',
        expertise: 25,
    },
    {
        name: 'GIT',
        icon: 'devicon-git-plain',
        expertise: 75,
    },
    // {
    //     name: 'NodeJS',
    //     icon: 'devicon-nodejs-plain',
    //     expertise: 100,
    // },
    // {
    //     name: 'Redis',
    //     icon: 'devicon-redis-plain',
    //     expertise: 100,
    // },
];

$(document).ready(() => {
    skills.forEach((skill, index) => {
        $('#skills-container').append(skill.name === 'spacer' ? `
            <div class="col-md-6"></div>
        ` : `
            <div class="col-md-6">
                <div class="skill pr-0 pl-0 ${index % 2 === 0 ? 'pr-md-4' : 'pl-md-4'}">
                    <i class="${skill.icon}"></i>
                    <div class="details">
                        <span>${skill.name}<span class="float-right">${skill.expertise}%</span></span>
                        <div class="progress">
                            <div class="progress-bar bg-secondary" role="progressbar" style="width: ${skill.expertise}%"
                                aria-valuenow="${skill.expertise}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        `)
    });

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    setTimeout(function () {
        $('.loader').hide();
    }, 250);
});