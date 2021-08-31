module.exports = {
    usageMode: 'expand',
    sections: [
        {
            name: 'TimeTable components',
            description: 'Hieronder zijn alle components die bij de TimeTable horen.',
            sections: [
                {
                    name: 'TimeTable',
                    components: 'src/components/TimeTable/*.tsx',
                },
                {
                    name: 'Column',
                    components: 'src/components/TimeTable/Column/*.tsx',
                },
                {
                    name: 'ColumnItem',
                    components: 'src/components/TimeTable/ColumnItem/*.tsx',
                },
            ],
        },
    ],
};
