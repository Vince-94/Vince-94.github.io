---
layout: page
title: DRAFT PoliTIO
description: DRone Autonomous Flight Team
img: assets/img/draft_polito/draft_logo.jpeg
importance: 1
# category: University
related_publications: false
---

During my Master's and early post-grad years at Politecnico di Torino, I was a core member and technical leader of DRAFT PoliTO (DRones Autonomous Flight Team), a competitive robotics team that consistently ranked among Italy's top university squads in national and European-level challenges.
The team brought together 15–25 PhD, Master's, and exceptional Bachelor's students from Mechatronics, Aerospace, Computer Engineering, and Automation disciplines. We built complete autonomous robotic systems from scratch every year – hardware selection, mechanical design, low-level firmware, perception, planning, control, and full-stack integration – with the goal of winning competitions sponsored by Leonardo S.p.A. and the European Space Agency.
These projects were my first experience leading full robotics architectures end-to-end and remain some of the most intense and rewarding work I've ever done.

## Leonard Drone Contest

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-1">
        {% include figure.liquid path="assets/img/draft_polito/draft_drone1.jpg" title="example draft_drone1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/draft_polito/draft_drone2.jpg" title="draft_drone2 image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Firsts 2 drones prototypes.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-7 text-start">
        <div class="caption">
            <p>
                The Leonardo Drone Contest is Leonardo S.p.A.'s annual autonomous drone competition (the only one of its kind in Europe) where six Italian universities compete to develop the most capable fully autonomous drone in increasingly complex GNSS-denied scenarios. The 2020–2021 editions focused heavily on outdoor/indoor navigation without GPS, unknown environment exploration, object detection/recognition, and autonomous decision-making using only on-board sensing and computation.
            </p>
            <p>
                Link:
                <a href="https://archivio-poliflash.polito.it/studenti_polito/seconda_edizione_del_leonardo_drone_contest_il_politecnico_conquista_meritatamente_il_terzo_posto"
                   target="_blank" rel="noopener noreferrer">
                   archivio-poliflash – DRAFT LDC
                </a>
            </p>
        </div>
    </div>
    <div class="col-sm-5 mt-3 mt-md-1">
        {% include figure.liquid
            loading="eager"
            path="assets/img/draft_polito/draft_ldc.jpg"
            title="draft_ldc"
            class="img-fluid rounded z-depth-1"
        %}
    </div>
</div>

As architecture lead for the 2020 and 2021 campaigns, I designed the entire high-level software stack (ROS1/ROS2) and defined the module interfaces that allowed parallel development by perception, planning, and control sub-teams.
Key technical contributions:

- Designed a modular, hybrid ROS1-ROS2 architecture with strict real-time guarantees for control and soft-real-time for perception
- Led integration of multi-modal SLAM (LiDAR + visual-inertial + wheel odometry on custom coaxial quadrotor and standard quadcopter platforms)
- Built Gazebo + PX4 simulation pipeline that achieved >95 % sim-to-real transfer for outdoor flights
- Implemented complete autonomous mission execution: take-off → exploration → object search/recognition → landing, all without any external positioning or human intervention
- Developed the 2021 drone "Agares" ground-up (500 mm class, Intel NUC + PX4 + Jetson Xavier computing)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/draft_polito/draft_tests.jpg" title="draft_tests" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Flight tests.
</div>

<video id="vtest" controls preload="metadata" playsinline style="max-width:900px;width:80%;display:block;margin:0 auto">
  <source src="{{ '/assets/img/draft_polito/competition.mp4' | relative_url }}" type="video/mp4">
</video>

## European Space Agency - Space Resources Challenge

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-1">
        {% include figure.liquid loading="eager" path="assets/img/draft_polito/darft_easa.jpg" title="darft_easa" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 text-start">
        <div class="caption">
            <p>
                The ESA-ESRIC Space Resources Challenge (2021–2023 edition) was a €500k-prize global competition co-organized by the European Space Agency and the European Space Resources Innovation Centre (Luxembourg) to develop robotic systems capable of autonomously prospecting lunar regolith for water ice and other volatiles in a lunar-analog environment. The final phase required robots to locate, excavate, and transport resources in a 500 m² dusty, rocky, low-light indoor arena simulating the lunar south pole.
            </p>
            <p>
                DRAFT PoliTO was selected as one of the top 10 teams worldwide (out of >80 initial applicants) and the only Italian team to reach the finals.
            </p>
        </div>
    </div>
</div>

I served as the overall robotics architecture lead for the entire 18-month campaign and designed the complete multi-platform autonomous system combining:

- A heavy-duty UGV (clearpath-inspired rover with excavation arm)
- A scouting/cooperative UAV
- Ground support infrastructure

Key technical achievements under my responsibility:

- Created a clean, versioned, modular ROS2 architecture supporting UGV, UAV, and future UUV platforms with explicit interface contracts and safe online upgrade capability – the same philosophy I still apply in my current senior role
- Led development of core algorithm modules: multi-modal SLAM (LiDAR + visual + thermal), planetary GNC stack, sensor fusion, and resource-aware planning
- Built full CI/CD + Docker + Ansible DevOps pipeline that allowed the team to deploy new versions in the field in <10 minutes
- Implemented cooperative behaviors: UAV scouts and builds map → UGV navigates to promising sites → joint resource transport
- Achieved fully autonomous 30+ minute missions in complete darkness and heavy dust conditions during final tests in Luxembourg

The system demonstrated the highest prospecting efficiency among non-professional teams in the finals and received special recognition from the ESA jury for architectural maturity and multi-platform reusability.
These two projects together gave me battle-tested experience in every layer of modern autonomous robotics – from bare-metal drivers to fleet-level architecture – and directly shaped the modular, safe-by-design approach I bring to production systems today.
