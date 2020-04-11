This project is built during [#flattenthecurvehack](https://membership.acs.org.au/flattenthecurvehack.html) by team LSNB.

## Agile Standup Tool
This is a quick web demo for an agile standup tool. 

[Live Demo](http://ahouinu.github.io/lsnb)

## Details

### Background

As the COVID-19 pandemic going on, many organisations have started to adopt a work-from-home workflow to keep their businesses running; many teams are doing daily standups to catch up with each other.

However, doing standups via video conferencing may be a new idea, especially to non-tech companies and teams. Besides, due to network issues, they may lose each other during the standups, which make this communication approach inefficient.

### Solution

To solve this problem and help businesses to run their standups smoothly, we come up with this Agile Standup Tool. For each team member, it takes <1 minute every day during the standup to record their updates in a form. These records is aggregated into a weekly dashboard, where the manager or scrum master can easily have an overview of how's the team going.

### UI Design

#### Dashboard

![dashboard](https://user-images.githubusercontent.com/7725516/79036827-5aec2300-7c0f-11ea-8242-9332a7547e3a.png)

#### Form

![form](https://user-images.githubusercontent.com/7725516/79036830-663f4e80-7c0f-11ea-8610-1a1e58980a04.png)

### Point of Difference

We want to build a small tool which can be used out of the box. As many companies are already using some tools like Trello, Jira or Monday, we're trying to work as a plugin or supplementary tool to their existing workflow. 

It helps both managers and team members do standups more efficiently and have a clear overview of the teams' progress.

### Potential Difficulties

* To support different workflows, we need to integrate with multiple APIs - G Suite, Microsoft Office (including Teams and Outlook)

* Asking users to fill out a form every day is still a pain. In the future, we can leverage on Machine Learning and Natural Language Processing to extract record and generate reports on the fly while the meeting is being conducted.
