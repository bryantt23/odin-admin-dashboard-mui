import React from 'react'
import { Grid, Paper } from "@mui/material"
import Project from './Project';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Super Cool Project",
            body: "Sed tempus ut lacus ut scelerisque. Suspendisse sollicitudin nibh erat, id facilisis felis accumsan nec."
        },
        {
            id: 2,
            title: "Impossible App",
            body: "In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a placerat velit sagittis id."
        },
        {
            id: 3,
            title: "Ad Blocker",
            body: "Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis. Aliquam sed malesuada eros."
        },
        {
            id: 4,
            title: "Less Cool Project",
            body: "Nullam condimentum ipsum ut lectus vehicula consectetur. Quisque sed dolor tincidunt, consectetur sapien et, facilisis dolor. Duis sem purus, dignissim ut sapien in, varius pellentesque lacus."
        },
        {
            id: 5,
            title: "Easy Peasy App",
            body: "Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim urna eget accumsan aliquam. Curabitur dignissim nisi in tortor commodo, ac bibendum magna tincidunt."
        },
        {
            id: 6,
            title: "Money Maker",
            body: "Praesent convallis, libero quis congue elementum, nunc ante faucibus sapien, ac scelerisque tortor purus sit amet ex. Pellentesque mollis nec sem vel aliquam."
        }
    ];

    return (
        <div>Projects

            <Grid container>
                {projects.map(project => (
                    <Grid item key={project.id} xs={12} md={6} lg={3} xl={2}>
                        <Project project={project} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Projects