import React from 'react'
import { Box, Typography } from "@mui/material"
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

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(6, 1fr)' },
        gridAutoRows: '1fr', // Each row has equal height
        gap: 2, // Adjust spacing between grid items
        height: '100%',
    };

    return (
        <Box>
            <Box sx={{ paddingLeft: 2 }}>
                <Typography variant="h6" gutterBottom>Your Projects</Typography>
            </Box>
            <Box sx={gridContainerStyle}>
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </Box>
        </Box>
    );
}

export default Projects